'use client'
import Button from '@/components/Button'

export default function SaveContact({ phone_number }: { phone_number: string }) {
    const handleSaveContact = () => {
        var contact = {
            displayName: "Melon Dusk",
            phoneNumbers: [
              {
                type: "mobile",
                value: "123-456-7890",
                pref: true
              }
            ],
            emails: [
              {
                type: "home",
                value: "melon.dusk@xcorp.com"
              }
            ],
            addresses: [
              {
                type: "home",
                formatted: "123 Main St\nAnytown, USA 12345"
              }
            ],
            organizations: [
              {
                type: "work",
                name: "XCorp Inc.",
                title: "Undefined"
              }
            ],
            urls: [
              {
                type: "home",
                value: "https://www.xcorp.69"
              }
            ],
            note: "Am I a note?"
          };
        //   let navigator: any;

        //   navigator = window.navigator;
        //   console.log('run',navigator.contacts )
        const supported = "contacts" in navigator && "ContactsManager" in window;
        console.log({supported})
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
