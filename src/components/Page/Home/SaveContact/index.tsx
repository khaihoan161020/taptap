'use client'
import Button from '@/components/Button'

export default function SaveContact({ phone_number }: { phone_number: string }) {
    const handleSaveContact = () => {
        const contact = {
            firstName: "John",
            lastName: "Doe",
            email: "johndoe@example.com",
            phone: "+1234567890",
          };
        
          const vCardData = generateVCard(contact);
          downloadVCard(vCardData);
    }
    function generateVCard(contact: any) {
        const { firstName, lastName, email, phone } = contact;
      
        const vCard = `BEGIN:VCARD
      VERSION:3.0
      N:${lastName};${firstName};;;
      FN:${firstName} ${lastName}
      EMAIL:${email}
      TEL:${phone}
      END:VCARD`;
      
        return vCard;
      }
      
      function downloadVCard(vCardData: any) {
        const vCardBlob = new Blob([vCardData], { type: "text/vcard" });
        const vCardURL = URL.createObjectURL(vCardBlob);
      
        const link = document.createElement("a");
        link.href = vCardURL;
        link.download = "contact.vcf";
        link.click();
      
        URL.revokeObjectURL(vCardURL);
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
