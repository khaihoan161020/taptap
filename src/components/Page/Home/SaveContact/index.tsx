'use client'
import Button from '@/components/Button'

export default function SaveContact({ phone_number }: { phone_number: string }) {
    const handleSaveContact = () => {
        // Get the contact information from the website
        var contact = {
            name: 'John Smith',
            phone: '555-555-5555',
            email: 'john@example.com'
        }
        // create a vcard file
        var vcard =
            'BEGIN:VCARD\nVERSION:4.0\nFN:' +
            contact.name +
            '\nTEL;TYPE=work,voice:' +
            contact.phone +
            '\nEMAIL:' +
            contact.email +
            '\nEND:VCARD'
        var blob = new Blob([vcard], { type: 'text/vcard' })
        var url = URL.createObjectURL(blob)

        const newLink = document.createElement('a')
        newLink.download = contact.name + '.vcf'
        newLink.textContent = contact.name
        newLink.href = url

        newLink.click()
    }

    return (
        <div className='sticky bottom-0 left-0 w-full py-1 flex justify-center'>
            {/* <a href={`tel:${phone_number}`} className="w-full inline-block" > */}
            <Button
                name='Save contact'
                variant='default'
                className='bg-neon w-full py-3'
                handleClick={() => handleSaveContact()}
            />
            {/* </a> */}
        </div>
    )
}
