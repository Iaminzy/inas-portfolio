import { Technologies } from '@/components/ui/Technologies';
import { Technologies1, Technologies2 } from '../../constant/common';

const Section4 = () => {
    return (
        <section className="relative flex flex-col gap-3 items-center justify-center h-full xl:px-10 px-5 py-10 w-full">

            <div className='flex flex-col gap-0 w-full mt-3 my-3'>
                <Technologies items={Technologies1} direction='right' speed='slow' />

                <Technologies items={Technologies2} direction='right' speed='slow' />
            </div>
        </section>
    )
}
export default Section4;
