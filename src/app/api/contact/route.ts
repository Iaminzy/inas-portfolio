import { NextResponse } from "next/server";
import { Resend } from "resend";
import { z } from "zod";

const resend = new Resend(process.env.RESEND_API_KEY);

const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Name must be at least 2 characters")
    .max(80, "Name is too long"),

  email: z
    .string()
    .trim()
    .email("Invalid email address")
    .max(120, "Email is too long"),

  message: z
    .string()
    .trim()
    .min(10, "Message must be at least 10 characters")
    .max(3000, "Message is too long"),

  // Honeypot field
  website: z.string().optional(),
});

export async function POST(request: Request) {
  try {
    // ------------------------------------------------
    // Check API key
    // ------------------------------------------------

    if (!process.env.RESEND_API_KEY) {
      console.error("RESEND_API_KEY is missing");

      return NextResponse.json(
        {
          error: "Server configuration error.",
        },
        {
          status: 500,
        },
      );
    }

    // ------------------------------------------------
    // Parse request
    // ------------------------------------------------

    const body = await request.json();

    // ------------------------------------------------
    // Validate input
    // ------------------------------------------------

    const result = contactSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json(
        {
          error: "Please check your form details.",
        },
        {
          status: 400,
        },
      );
    }

    const { name, email, message, website } = result.data;

    // ------------------------------------------------
    // Honeypot protection
    // ------------------------------------------------

    if (website && website.trim() !== "") {
      // Pretend the message was accepted.
      // This prevents bots from learning that
      // they were detected.
      return NextResponse.json({
        success: true,
      });
    }

    // ------------------------------------------------
    // Send email
    // ------------------------------------------------

    const { data, error } = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: ["inasahamedofficial@gmail.com"],

      replyTo: email,

      subject: `New Portfolio Message from ${name}`,

      html: `
                <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #222;">
                    
                    <h2>New Portfolio Contact</h2>

                    <p>
                        <strong>Name:</strong>
                        ${escapeHtml(name)}
                    </p>

                    <p>
                        <strong>Email:</strong>
                        ${escapeHtml(email)}
                    </p>

                    <hr />

                    <p>
                        <strong>Message:</strong>
                    </p>

                    <p>
                        ${escapeHtml(message).replace(/\n/g, "<br />")}
                    </p>

                </div>
            `,
    });

    if (error) {
      console.error("Resend error:", error);

      return NextResponse.json(
        {
          error: "Unable to send your message right now.",
        },
        {
          status: 500,
        },
      );
    }

    return NextResponse.json({
      success: true,
      id: data?.id,
    });
  } catch (error) {
    console.error("Contact API error:", error);

    return NextResponse.json(
      {
        error: "Something went wrong. Please try again later.",
      },
      {
        status: 500,
      },
    );
  }
}

// ------------------------------------------------
// Prevent HTML injection inside email
// ------------------------------------------------

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
