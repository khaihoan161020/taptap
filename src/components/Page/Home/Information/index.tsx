'use client'
import Modal from '@/components/Modal'
import { sleep } from '@/utils'
import Image from 'next/image'
import { useEffect, useState } from 'react'

interface InformationProps {
    avatar_url: string
    name: string
    role: string
}
export default function Information({ avatar_url, name, role }: InformationProps) {
    const generationText = ['Khải Hoàn', 'Hoàn Trương', 'Truong Khai Hoan']
    const [text, setText] = useState(generationText[0])
    const [isOpenAvt, setIsOpenAvt] = useState(false)
    const [curIndexText, setCurIndexText] = useState(0)
    useEffect(() => {
        ;(async () => {
            if (text === '') {
                setText(generationText[curIndexText === generationText.length - 1 ? 0 : curIndexText + 1])
                setCurIndexText(curIndexText === generationText.length - 1 ? 0 : curIndexText + 1)
                return
            }
            if (text === generationText[curIndexText]) await sleep(3000)
            const id = setTimeout(() => {
                const curText = text.substring(0, text.length - 1)
                if (text === '') clearTimeout(id)
                setText(curText)
            }, 400)
        })()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [text])
    return (
        <div className='flex gap-2 mb-2'>
            <div
                className='relative rounded-full w-[120px] h-[120px] bg-white overflow-hidden'
                onClick={() => setIsOpenAvt(true)}
            >
                <Image src={avatar_url} alt='avt' fill style={{ objectFit: 'contain' }} />
            </div>
            <div className='flex flex-col gap-2 justify-center'>
                <h2 className='text-2xl text-white font-bold'>
                    {text}
                    <span className='text-neon'>|</span>
                </h2>
                <p className='text-md text-subText-dark'>{role}</p>
            </div>
            {isOpenAvt && (
                <Modal isOpen={isOpenAvt} closeModal={() => setIsOpenAvt(false)}>
                    {/* <div className='overflow-hidden' style={{width: '100%', height: '100%', position: 'relative'}}> */}
                    <Image
                        src={avatar_url}
                        alt='avt'
                        width={0}
                        height={0}
                        sizes='100vw'
                        style={{ width: '100%', height: 'auto' }}
                    />
                    {/* </div> */}
                </Modal>
            )}
        </div>
    )
}
