import './globals.css'
import { Inter } from 'next/font/google'
import dynamic from 'next/dynamic'

const ToastContainerClient =  dynamic(() => import('@/components/Notification'), { ssr: false })
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} relative bg-gradient-bg min-h-screen overflow-y-scroll`}>
        {children}
        <div className='deep-shadow-blur'></div>
        <ToastContainerClient />
      </body>
    </html>
  )
}
