'use client'
import { Spotify } from 'react-spotify-embed'
import Lottie from 'react-lottie'
import * as animationData from '@/contants/heart-lottie.json'
import { useState } from 'react'

interface SpotifyPlayerProps {
    spotify_url: string
}
export default function SpotifyPlayer({ spotify_url }: SpotifyPlayerProps) {
    const [isActive, setIsActive] = useState(true)
    const defaultOptions = {
        loop: true,
        autoplay: !isActive,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    }

    return (
        <div className='flex gap-2 items-stretch'>
            <div className='w-[300px]'>
                <Spotify wide link={spotify_url} />
            </div>
            <div className='w-[calc(100%-300px)] bg-main-dark rounded-lg flex items-center justify-center'
                onClick={() => setIsActive(false)}
            >
                <Lottie options={defaultOptions} height={60} width={60} isPaused={isActive} />
            </div>
        </div>
    )
}
