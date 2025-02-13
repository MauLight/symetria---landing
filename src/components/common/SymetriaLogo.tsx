import { useState } from 'react'

export default function SymetriaLogo(): JSX.Element {

    const [width] = useState<number>(720)
    const [height] = useState<number>(480)

    return (
        <div className='flex justify-end items-center z-20 border border-white'>
            <canvas width={width} height={height} id='canvas'></canvas>
        </div>
    )
}
