import { emailIcon, phoneIcon } from '@/contants/icon'

interface ContactInfoProps {
    phone_number: string
    email: string
}

export default function ContactInfo({ phone_number, email }: ContactInfoProps) {
    return (
        <div className='my-2 p-4 bg-main-dark rounded-lg'>
            {/* <h3 className='text-xl text-white font-medium mb-1'>Contact Info</h3> */}
            <div className='flex flex-col gap-2'>
                <div className='flex gap-1 items-center py-2 border-stone-200 border-b-[1px]'>
                    <div className='w-6 h-6 text-base-dark'>{phoneIcon}</div>
                    <p className='text-base-dark'>{phone_number}</p>
                </div>
                <div className='flex gap-4 items-center'>
                    <div className='w-4 h-4 text-base-dark'>{emailIcon}</div>
                    <p className='text-base-dark'>{email}</p>
                </div>
            </div>
        </div>
    )
}
