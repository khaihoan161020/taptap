import Button from '@/components/Button'

export default function SaveContact({ phone_number }: { phone_number: string }) {
    return (
        <div className='sticky bottom-0 left-0 w-full py-4 px-4 flex justify-center'>
            <a href={`tel:${phone_number}`} className="w-full inline-block" >
                <Button name='Save contact' variant='default' className='bg-neon w-full py-3' />
            </a>
        </div>
    )
}
