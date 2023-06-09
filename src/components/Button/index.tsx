'use client'
import { useState, useLayoutEffect, memo } from 'react'

interface ButtonProps {
    name: string
    icon?: any
    className?: string
    handleClick?: any
    variant?: 'default' | 'disabled' | 'icon' | undefined
    type?: 'submit' | 'reset' | 'button' | undefined
}

type PostBtnClick = {
    x: number
    y: number
    size: number
}
const Button = ({ name, variant, className, icon, type = 'button', handleClick }: ButtonProps) => {
    const TIME_RIPPLE_CIRCLE = 300
    const [posBtnClick, setPosBtnClick]: any = useState<PostBtnClick>()
    const rippleEffect = async (event: any) => {
        const rippleContainer = event.currentTarget.getBoundingClientRect()
        const size = rippleContainer.width > rippleContainer.height ? rippleContainer.width : rippleContainer.height
        const x = event.pageX - rippleContainer.x - size / 2
        const y = event.pageY - rippleContainer.y - size / 2
        setPosBtnClick({
            x,
            y,
            size: size
        })
    }

    const useDebouncedRippleCleanUp = (ripple: PostBtnClick, duration: number, cleanUpFunction: () => void) => {
        useLayoutEffect(() => {
            let bounce: any = null
            if (ripple) {
                clearTimeout(bounce)
                bounce = setTimeout(() => {
                    cleanUpFunction()
                    clearTimeout(bounce)
                }, duration)
            }

            return () => clearTimeout(bounce)
        }, [ripple, duration, cleanUpFunction])
    }
    useDebouncedRippleCleanUp(posBtnClick, TIME_RIPPLE_CIRCLE, () => {
        setPosBtnClick(null)
    })

    const genClassVariant = (variant: string | undefined) => {
        switch (variant) {
            case 'icon':
                return 'w-fit p-1 dark:text-white-gray'
            case 'default':
                return 'bg-gray-dark text-white '
            case 'disabled':
                return 'bg-neutral-400 text-white-gray'
            default:
                return 'dark:text-white-gray'
        }
    }
    return (
        <button
            className={`h-fit z-0 overflow-hidden block px-6 py-2 text-sm relative transition-all rounded-xl active:scale-95 ${genClassVariant(
                variant
            )} ${className}`}
            onClick={(e) => {
                if (typeof handleClick === 'function') handleClick()
            }}
            type={type}
            onMouseDown={(e) => rippleEffect(e)}
            data-ripple-light='true'
        >
            {icon}
            <span className='text-inherit font-medium text-[15px] leading-[24px]'>{name}</span>
            {posBtnClick && (
                <span
                    style={{
                        top: posBtnClick.y,
                        left: posBtnClick.x,
                        width: posBtnClick.size,
                        height: posBtnClick.size
                    }}
                    className='absolute 
              rounded-full
              animate-ripple 
              bg-gradient-radial from-[rgba(10,10,10,0.06)] to-[rgba(10,10,10,0.2)]
              '
                    //
                ></span>
            )}
        </button>
    )
}
export default memo(Button)
