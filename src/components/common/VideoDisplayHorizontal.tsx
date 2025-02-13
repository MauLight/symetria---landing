import { useEffect, useRef, useState, type ReactElement } from 'react'
import { motion } from 'framer-motion'

interface VideoDisplayProps {
  title: string
  description: string
  mp4: string[]
  webM: string[]
  bgColor: string
}

export const VideoDisplayHorizontal = ({ webM }: VideoDisplayProps): ReactElement => {
  const [currentVideo, setCurrentVideo] = useState(0)
  const [play, setPlay] = useState<boolean>(false)
  const videoRef = useRef<HTMLVideoElement | null>(null)

  const handleSlider = (direction: number) => {
    setCurrentVideo((prev) => {
      if (direction === 1) {
        if (prev === 0) return webM.length - 1
        return prev - 1
      }
      if (direction === 2) {
        if (prev === webM.length - 1) return 0
        return prev + 1
      }
      return prev
    })
  }

  useEffect(() => {
    if (videoRef && videoRef.current) {
      setTimeout(() => {
        videoRef.current?.play()
        setPlay(true)
      }, 3600)
    }
  }, [])

  return (
    <div className="relative flex justify-center items-center w-screen h-screen">
      <div className="absolute top-0 left-0 bg-gradient-to-t from -[#10100e] to-transparent w-full h-full"></div>
      <motion.video
        ref={videoRef}
        src={webM[currentVideo]}
        onEnded={() => { handleSlider(2) }}
        autoPlay={play}
        muted className='sm:shrink-0 w-full h-full right-0 top-0 object-cover z-10 grayscale opacity-50' />

    </div>
  )
}
