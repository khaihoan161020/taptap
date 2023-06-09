'use client'
import Modal from '@/components/Modal'
import notification from '@/components/Notification/toastify'
import Image from 'next/image'
import { useState } from 'react'

type serviceType = {
    icon_url: string
    name: string
    type_code: string
    detail: any
}
interface ListServiceProps {
    services: Array<serviceType>
}

export default function ListService({ services }: ListServiceProps) {
    const [toggleService, setToggleService] = useState('')
    const [isOpen, setIsOpen] = useState(false)

    const openModal = () => {
        setIsOpen(true)
    }
    const closeModal = () => {
        setIsOpen(false)
    }
    const handleToggle = (prev: string, serviceName: string) => {
        if (prev !== serviceName) setToggleService(serviceName)
        else setToggleService('')
    }
    const layoutService = (service: serviceType) => {
        return (
            <div className='flex bg-main-dark rounded-lg my-1 py-1 px-3 items-center gap-2'>
                <div className='w-14 h-14 relative'>
                    <Image
                        src={service.icon_url}
                        alt='icon'
                        fill
                        className='bg-white p-1 rounded-full'
                        style={{ objectFit: 'contain' }}
                    />
                </div>
                <p className="text-base-dark">{service.name}</p>
            </div>
        )
    }

    const layoutBank = (bank_name: string, bank_code: string, bank_owner: string) => {
        return (
            <div className='rounded-lg bg-gray-dark p-3'>
                <h3 className='text-lg text-base-dark leading-4 font-medium'>Chuyển đến</h3>
                <p className='text-subText-dark'>{bank_owner}</p>
                <h3 className='text-md leading-4 mt-2 text-base-dark font-medium'>{bank_name}</h3>
                <span className='text-subText-dark'>{bank_code}</span>
            </div>
        )
    }
    const renderService = (service: serviceType) => {
        switch (service.type_code) {
            case 'banking':
                return (
                    <div
                        onClick={() => {
                            handleToggle(toggleService, service.name);
                            (toggleService !== service.name) && notification(`Sao chép mã Ngân hàng: ${service.detail.bank_code}`)
                            navigator.clipboard.writeText(service.detail.bank_code)
                        }}
                    >
                        {layoutService(service)}
                        {toggleService === service.name && (
                            <div>{layoutBank(service.name, service.detail.bank_code, service.detail.bank_owner)}</div>
                        )}
                    </div>
                )
            case 'e-wallet':
                return (
                    <div onClick={() => openModal()}>
                        {layoutService(service)}
                        {/* {toggleService === service.name && } */}
                        {isOpen && (
                            <Modal isOpen={isOpen} closeModal={closeModal}>
                                <div className='flex flex-col items-center justify-center'>
                                    <div className='relative w-screen md:h-[500px] h-[400px]'>
                                        <Image
                                            src={service.detail.image_url}
                                            alt='payment e-wallet'
                                            fill
                                            style={{ objectFit: 'contain' }}
                                        />
                                    </div>
                                </div>
                                <div className={'flex flex-col items-center gap-2'}>
                                    <div className='relative w-10/12 h-[2px] mt-4 bg-gray-dark/20'>
                                        <span className='text-slate-400 text-sm relative -top-3 left-1/2 translate-x-[20px] p-1 bg-main-dark '>
                                            or
                                        </span>
                                    </div>

                                    <a
                                        href={service.detail.link_payment}
                                        target={'_blank'}
                                        className='outline-none inline-block text-blue-500'
                                    >
                                        Thanh toán qua link Momo
                                    </a>
                                </div>
                            </Modal>
                        )}
                    </div>
                )
            case 'social':
                return (
                    <div>
                        <a href={service.detail.social_url} target='_blank'>
                            {layoutService(service)}
                        </a>
                    </div>
                )
        }
    }
    return (
        <div className={`flex flex-col ${toggleService.length > 0 ? 'mb-[40px]' : ''}`}>
            {services.length > 0 &&
                services.map((service: serviceType, index: number) => <div key={index}>{renderService(service)}</div>)}
        </div>
    )
}
