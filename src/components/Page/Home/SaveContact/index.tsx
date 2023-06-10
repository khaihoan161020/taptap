'use client'
import Button from '@/components/Button'

export default function SaveContact({ phone_number }: { phone_number: string }) {
    const handleSaveContact = () => {
        const contact = {
            displayName: 'John Doe',
            phoneNumbers: [
                {
                    value: '+1234567890',
                    type: 'mobile'
                }
            ],
            emailAddresses: [
                {
                    value: 'johndoe@example.com',
                    type: 'work'
                }
            ]
        }

        let navigator: any = window.navigator
        const supported = 'contacts' in navigator && 'ContactsManager' in window
        console.log(supported, navigator)

        alert(`supported ${supported}`)
        if (supported) {
            try {
                const newContact = navigator.contacts.create(contact)
                newContact.save(
                    () => {
                        console.log('Contact saved successfully!')
                        alert('ok')
                    },
                    (error: any) => {
                        console.error('Failed to save contact:', error)
                        alert(`error: ${JSON.stringify(error)}`)
                    }
                )
            } catch (error) {
                alert(`error 2: ${error}`)
            }
        }
        //   if (navigator && navigator?.contacts && navigator.contacts.create) {
        //       navigator.contacts.save(contact, function () {
        //         console.log("Contact saved successfully");
        //       }, function (error: any) {
        //         console.error("Error saving contact: " + error);
        //       });
        //   }
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
