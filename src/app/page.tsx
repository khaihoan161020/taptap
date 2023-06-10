import ContactInfo from '@/components/Page/Home/ContactInfo'
import Information from '@/components/Page/Home/Information'
import ListService from '@/components/Page/Home/ListService'
import SaveContact from '@/components/Page/Home/SaveContact'
import dynamic from 'next/dynamic'

const SpotifyPlayer = dynamic(() => import('@/components/Page/Home/SpotifyPlayer'), {ssr: false})
const data = {
    user_info: {
        avatar_url: 'https://res.cloudinary.com/dkyfnct6t/image/upload/v1686315450/taptap/b9c11909b20863563a19_ehblcj.jpg',
        name: 'Khải Hoàn',
        role: 'Frontend Developer'
    },
	phone_number: '0703343323',
	email: 'hoantk.se@gmail.com',
	spotify_url: "https://open.spotify.com/track/3wPPWcVuinAU7dXcJXtCID?si=19f07045f25d42d6",
	services: [
		{
			icon_url: 'https://res.cloudinary.com/dkyfnct6t/image/upload/v1686305879/taptap/480px-Facebook_f_logo__282021_29.svg_x1bmtn.png',
			name: 'Facebook',
			type_code: 'social',
			detail: {
				social_url: 'https://www.facebook.com/hoankhai.fe/'
			}
		},
		{
			icon_url: 'https://res.cloudinary.com/dkyfnct6t/image/upload/v1686305897/taptap/2048px-Instagram_logo_2016.svg_nq7j5f.png',
			name: 'Instagram',
			type_code: 'social',
			detail: {
				social_url: 'https://www.instagram.com/hoan.tkh/'
			}
		},
		{
			icon_url: 'https://res.cloudinary.com/dkyfnct6t/image/upload/v1686325261/taptap/2048px-Icon_of_Zalo.svg_an7ecm.png',
			name: 'Zalo',
			type_code: 'social',
			detail: {
				social_url: 'https://zalo.me/0703343323'
			}
		},
		{
			icon_url: 'https://res.cloudinary.com/dkyfnct6t/image/upload/v1686305828/taptap/momo-logo-ED8A3A0DF2-seeklogo.com_f0zqbf.png',
			name: 'Momo',
			type_code: 'e-wallet',
			detail: {
				link_payment: 'https://me.momo.vn/hoantk',
				image_url: 'https://res.cloudinary.com/dkyfnct6t/image/upload/v1686307751/taptap/348369215_814776206365457_7979151180905115650_n_vsoaec.jpg'
			}
		},
		{
			icon_url: 'https://res.cloudinary.com/dkyfnct6t/image/upload/v1686305854/taptap/612a1d389c77431987d9888ff747b2ad40317dbc-1417x549_kt1eap.png',
			name: 'Cake by VP',
			type_code: 'banking',
			detail: {
				bank_code: '0703343323',
				bank_owner: 'Trương Khải Hoàn'
			}
		},
		{
			icon_url: 'https://res.cloudinary.com/dkyfnct6t/image/upload/v1686305804/taptap/mb-bank-logo-inkythuatso-01-10-09-01-10_nlx9tg.jpg',
			name: 'MB Bank',
			type_code: 'banking',
			detail: {
				bank_code: '0703343323',
				bank_owner: 'Trương Khải Hoàn'
			}
		},
	]
}
export default function Home() {
    return (
        <main className=''>
            <div className='sm:w-[500px] w-full h-screen mx-auto px-3 py-4'>
                <Information
                    avatar_url={data.user_info.avatar_url}
                    name={data.user_info.name}
                    role={data.user_info.role}
                />
				<SpotifyPlayer spotify_url={data.spotify_url}/>
				<ContactInfo phone_number={data.phone_number} email={data.email} />
				<ListService services={data.services}/>
				<SaveContact phone_number={data.phone_number} />
            </div>
        </main>
    )
}
