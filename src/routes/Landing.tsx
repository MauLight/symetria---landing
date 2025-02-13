import { useEffect, useRef, useState, type ReactNode } from 'react'
import { AnimatePresence, motion, MotionConfig, useAnimationFrame, useMotionValue, useScroll, useSpring, useTransform, useVelocity, wrap } from 'framer-motion'
import { animatedGradient, animatedGradientText } from '@/utils/styles'
import FadeinContainer from '@/components/common/FadeinContainer'
import { Agent } from '@/utils/classes'
import { randRange } from '@/utils/functions'
import { ReactTyped } from "react-typed"
// import Multistep from '@/components/landing/Multistep'
// import EmailClient from '@/components/landing/EmailClient'
// import DemoHeader from '@/components/landing/DemoHeader'
import { VideoDisplayHorizontal } from '@/components/common/VideoDisplayHorizontal'

import video1 from '@/assets/video/hero_video_1.webm'
import video2 from '@/assets/video/hero_video_2.webm'
import video3 from '@/assets/video/hero_video_3.webm'

const childVariants = {
    visible: {
        y: 0,
        opacity: 1,
        transition: { type: 'spring', bounce: 0.2, visualDuration: 1 }
    },
    hidden: {
        y: 100,
        opacity: 0
    }
}

function Symetria() {

    return (
        <main className="w-[1584px] h-[800px] flex flex-col bg-[#10100e]">
            <div className="w-full h-full grid grid-cols-9 z-20">
                <div className='bg-transparent'></div>
                <section className="col-span-7 grid grid-cols-5 justify-center items-center gap-x-10">

                    <div className='bg-transparent'></div>

                    <div className='flex justify-end items-center z-20'>
                        <div className={`w-[200px] h-[200px] flex justify-center items-center`}>
                            <motion.h1
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.8, delay: 1.8 }}
                                className={`absolute text-[8rem] text-balance tracking-normal leading-tight text-[#10100e] font-semibold blur-xl box-content ${animatedGradientText}`}>
                                {'<|>'}
                            </motion.h1>
                            <motion.h1
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.4, delay: 1.8 }}
                                className={`relative text-[8rem] text-balance tracking-normal leading-tight text-[#10100e] font-semibold ${animatedGradientText}`}>
                                {'<|>'}
                            </motion.h1>
                        </div>
                    </div>

                    <div className='col-span-2'>
                        <div className='min-h-[105px]'>
                            {/* <ReactTyped className={`font-logo ${animatedGradientText} text-[5.2rem] tracking-wide uppercase leading-tight`} startWhenVisible strings={['Symetria']} typeSpeed={50} /> */}
                            <motion.h1
                                initial={{ opacity: 0, scale: 1.2 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 1, ease: 'easeOut' }}
                                className={`font-logo ${animatedGradientText} text-[5.2rem] tracking-wide uppercase leading-tight`} children={'Symetria'} />
                        </div>
                        <div className='flex flex-col gap-y-10 z-20'>

                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.5, delay: 0.8 }}
                                className='min-h-[80px] w-[320px]'>
                                <ReactTyped className={`text-[1.8rem] text-balance tracking-normal leading-8 text-sym_gray-50`} startDelay={800} strings={['If you can imagine it, you can make it real.']} typeSpeed={10} />
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.8, delay: 2.8 }}
                                className="flex items-center gap-x-3 pr-8">
                                <img src="https://res.cloudinary.com/maulight/image/upload/v1738652966/dnegritgu1jhievndntb.png" alt="react" className='w-[40px] h-[40px] object-cover' />
                                <div className=' flex justify-center items-center rounded-[12px] py-2 px-5 bg-sym_gray-800'>
                                    <p className='text-[1rem] px-2 text-balance font-light leading-tight text-sym_gray-50'>{'Define your online presence with superb design and software that delivers real results.'}</p>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>
            </div>

            <div className='absolute top-0 left-0 w-full h-full z-10 bg-radial from-transparent  to-[#10100e]'></div>
            <div className='absolute top-0 left-0 w-full h-full z-10 bg-radial from-transparent  to-[#10100e]'></div>
            <div className='absolute top-0 left-0 w-full h-full z-10 bg-radial from-transparent  to-[#10100e]'></div>
            <div className="z-0 absolute top-0 right-0 opacity-60">
                <VideoDisplayHorizontal title='' description='' bgColor='' mp4={[]} webM={[video3, video2, video1]} />
            </div>
            {/* <div className='z-0'>
                <canvas className='absolute top-0 right-0 z-0 opacity-60' width={width} height={height} id='animation' />
            </div> */}
        </main>
    )
}

export default function Landing(): ReactNode {

    const cardText = [
        {
            id: 1,
            title: 'Optimize',
            desc: 'Speed up your processes with custom software that is performant and reliable.',
            icon: 'fa-solid fa-gauge-high'
        },
        {
            id: 2,
            title: 'Stand out',
            desc: 'Bring a satisfying experience to your customers with modern design and impressive user experience.',
            icon: 'fa-solid fa-eye'
        },
        {
            id: 3,
            title: 'Innovate',
            desc: 'Get access to cutting-edge software technologies through our propietary applications, or build your own ideas with us.',
            icon: 'fa-regular fa-lightbulb'
        },
        {
            id: 4,
            title: 'Access',
            desc: 'Make use of our services in a variety of payment models and bundles, find the services that best suit your needs and pay only for what you use.',
            icon: 'fa-solid fa-universal-access'
        },
    ]

    const [ref, bounds] = useMeasure()

    const [width] = useState(bounds.width > 0 ? bounds.width : 2000)
    const [height] = useState(700)

    const agents: Agent[] = []

    //* Number of iterations equals number of dots on screen.
    for (let i = 0; i < 100; i++) {
        const x = randRange(0, width)
        const y = randRange(0, height)
        agents.push(new Agent(x, y))
    }

    useEffect(() => {
        const canvas = document.getElementById('canvas') as HTMLCanvasElement
        const ctx = canvas.getContext('2d') as CanvasRenderingContext2D

        const render = () => {
            ctx.clearRect(0, 0, width, height)

            for (let i = 0; i < agents.length; i++) {
                const agent = agents[i]

                for (let j = i + 1; j < agents.length; j++) {
                    const other = agents[j]
                    const dist = agent.pos.getDistance(other.pos)

                    //* Number indicates the max distance between two points to hold a line between them.
                    if (dist > 250) continue

                    ctx.lineWidth = 1 - dist / 200
                    ctx.beginPath()
                    ctx.moveTo(agent.pos.x, agent.pos.y)
                    ctx.lineTo(other.pos.x, other.pos.y)
                    ctx.stroke()
                    ctx.strokeStyle = '#6366F1'
                }
            }

            agents.forEach(agent => {
                agent.update()
                agent.draw(ctx)
                agent.bounce(width, height)
            })
        }

        const loop = () => {
            render()
            requestAnimationFrame(loop)
        }
        loop()
        return () => ctx.clearRect(0, 0, width, height)
    })

    return (
        <div ref={ref} className='w-full min-h-screen flex flex-col justify-center items-center gap-y-20 bg-sym_gray-800'>

            <Symetria />

            <div className='w-full z-10 h-[200px] flex justify-center items-start pt-10'>
                <i className="fa-solid fa-caret-down fa-2xl text-sym_gray-50 animate-pulse"></i>
            </div>

            <div className='flex flex-col gap-y-10'>
                <div className='w-full grid grid-cols-5 bg-[#10100e]'>
                    <div className="col-span-2"></div>
                    <div className="col-span-1 flex flex-col gap-y-10">
                        <h1 className='text-sym_gray-50 text-balance text-[1.5rem]'>
                            If you’re building the next version of your software, you don’t just want it to be faster and more efficient—you want it to stand out.
                        </h1>
                    </div>
                    <div className="col-span-2"></div>
                </div>
                <div className='w-full grid grid-cols-5 bg-[#10100e]'>
                    <div></div>
                    <div></div>
                    <h1 className='col-span-2 text-sym_gray-50 text-balance text-[1.5rem] w-[400px]'>
                        You want an experience that’s <b className={animatedGradientText}>elegant, eye-catching,</b> and <b className={animatedGradientText}>seamless</b>.
                    </h1>
                </div>

            </div>

            <div className='w-full h-[200px]'></div>

            <div className='w-[1400px]'>
                <FadeinContainer>
                    <>
                        {
                            cardText.map((card, i) => (
                                <LandingCard card={card} key={i} />
                            ))
                        }
                    </>
                </FadeinContainer>
            </div>

            <motion.div
                className='w-full h-[600px] flex justify-center items-center'>
                <ParallaxText baseVelocity={-10}>
                    symetria
                </ParallaxText>
            </motion.div>

            {/* <div className='w-full h-[700px] bg-[#10100e]'></div> */}

            <div className="w-full min-h-screen flex flex-col justify-center items-center gap-y-10 pt-10">
                {/* <Multistep />
                <EmailClient />
                <DemoHeader /> */}
                <ContactForm parent={bounds} />
            </div>
        </div>
    )
}

function LandingCard({ card }: { card: { id: number, title: string, desc: string, icon: string } }) {

    const canvasRef = useRef<HTMLCanvasElement>(null)

    useEffect(() => {
        function drawGrid(ctx: CanvasRenderingContext2D, width: number, height: number, rows: number, cols: number) {
            const xSpacing = width / cols;
            const ySpacing = height / rows;
            const radius = 1

            for (let i = 0; i < rows; i++) {
                for (let j = 0; j < cols; j++) {
                    const x = j * xSpacing + xSpacing / 2;
                    const y = i * ySpacing + ySpacing / 2;

                    ctx.beginPath();
                    ctx.arc(x, y, radius, 0, Math.PI * 2)
                    ctx.fillStyle = '#6366F1'
                    ctx.fill();
                }
            }
        }

        const canvas = canvasRef.current as HTMLCanvasElement
        if (canvas) {
            const ctx = canvas.getContext('2d')
            const canvasWidth = canvas.width
            const canvasHeight = canvas.height
            if (ctx) {
                drawGrid(ctx, canvasWidth, canvasHeight, 30, 30)
            }
        }

    }, [])


    return (
        <motion.div variants={childVariants} key={card.id} className={`w-1/3 h-[280px] p-[2px] ${animatedGradient} rounded-[12px]`}>
            <div className='relative w-full h-full flex flex-col justify-end rounded-[10px] gap-y-8 pb-10 px-10 bg-[#10100e] overflow-hidden'>
                <i className={`${card.icon} fa-2xl text-indigo-500 z-20`}></i>
                <div className='z-20 flex flex-col gap-y-1'>
                    <h1 className='text-[#fff] font-title text-[2.2rem]'>{card.title}</h1>
                    <p className='text-gray-200 text-[1rem] text-balance min-h-[4em]'>{card.desc}</p>
                </div>
                <div className='z-10 absolute top-0 left-0 w-full h-full object-cover bg-radial-[at_20%_95%] from-[#10100e] to-transparent to-90%' />
                <div className='z-10 absolute top-0 left-0 w-full h-full object-cover bg-radial-[at_20%_45%] from-[#10100e] to-transparent to-100%' />
                <canvas ref={canvasRef} width={400} height={300} className='absolute top-0 left-0 w-full h-full object-cover opacity-80' />
            </div>

        </motion.div>
    )
}

interface ParallaxProps {
    children: string
    baseVelocity: number
}

function ParallaxText({ children, baseVelocity = 100 }: ParallaxProps) {
    const baseX = useMotionValue(0)
    const { scrollY } = useScroll()
    const scrollVelocity = useVelocity(scrollY)
    const smoothVelocity = useSpring(scrollVelocity, {
        damping: 50,
        stiffness: 400
    })
    const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
        clamp: false
    })

    /**
     * This is a magic wrapping for the length of the text - you
     * have to replace for wrapping that works for you or dynamically
     * calculate
     */
    const x = useTransform(baseX, (v) => `${wrap(-2, -22, v)}%`)

    const directionFactor = useRef<number>(1)
    useAnimationFrame((_, delta) => {
        let moveBy = directionFactor.current * baseVelocity * (delta / 1000)

        /**
         * This is what changes the direction of the scroll once we
         * switch scrolling directions.
         */
        if (velocityFactor.get() < 0) {
            directionFactor.current = -1
        } else if (velocityFactor.get() > 0) {
            directionFactor.current = 1
        }

        moveBy += directionFactor.current * moveBy * velocityFactor.get()

        baseX.set(baseX.get() + moveBy)
    })

    /**
     * The number of times to repeat the child text should be dynamically calculated
     * based on the size of the text and viewport. Likewise, the x motion value is
     * currently wrapped between -20 and -45% - this 25% is derived from the fact
     * we have four children (100% / 4). This would also want deriving from the
     * dynamically generated number of children.
     */
    return (
        <div className="parallax">
            <motion.div className={`scroller ${animatedGradientText}`} style={{ x }}>
                <span>{children} </span>
                <span>{children} </span>
                <span>{children} </span>
                <span>{children} </span>
                <span>{children} </span>
            </motion.div>
        </div>
    )
}


import { CheckIcon } from "@heroicons/react/solid"
import { createContext } from "react"
import { useContext } from "react"
import useMeasure from 'react-use-measure'
import axios from 'axios'
import validator from 'validator'

let transition = { type: "ease", ease: "easeInOut", duration: 1 }

function ContactForm({ parent }: { parent: any }) {

    const [email, setEmail] = useState<string>('')
    const [status, setStatus] = useState("idle")
    const [ref, bounds] = useMeasure()

    async function handleSubmitContact() {
        console.log(email)
        if (!validator.isEmail(email)) {
            return
        }

        try {
            const { data } = await axios.post('https://symetria-landing.netlify.app/.netlify/functions/send-contact', { email })
            if (data.message) {
                setStatus("success")
            }
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <MotionConfig transition={transition}>
            <div className="relative w-full h-[700px] flex flex-col items-start border-t border-zinc-600 pt-44">
                <div className="mx-auto w-full max-w-md z-20">
                    <div className="rounded-2xl border border-zinc-700 bg-zinc-900 overflow-hidden">
                        <div className="px-8 pt-8">
                            <p className="text-lg text-white">{status === "idle" || status === "saving" ? "Let's talk" : 'Thank you.'}</p>
                        </div>

                        <motion.div
                            animate={{ height: bounds.height > 0 ? bounds.height : '' }}
                            transition={{ type: 'spring', bounce: 0.1, duration: 0.8 }}
                        >
                            <div ref={ref}>
                                <AnimatePresence mode='popLayout'>
                                    {status === "idle" || status === "saving" ? (

                                        <motion.div
                                            key={1}
                                            exit={{ opacity: 0 }}
                                            transition={{ ...transition, duration: 0.3 }}
                                            className='p-8'>
                                            <Form
                                                email={email}
                                                onSubmit={handleSubmitContact}
                                                className=""
                                            >
                                                <p className="text-sm text-zinc-400">
                                                    Enter your email and we'll get in contact with you:
                                                </p>
                                                <div className="mt-3">
                                                    <input
                                                        value={email}
                                                        onChange={({ target }) => { setEmail(target.value) }}
                                                        className="block w-full px-2 rounded border-none h-10 bg-[#fff] text-slate-900 outline-0"
                                                        placeholder="your@email.com"
                                                    />
                                                </div>
                                                <div className="mt-8 text-right">
                                                    <Form.Button className="rounded bg-indigo-500 px-5 py-2 text-[1rem] text-white ">
                                                        Contact me
                                                    </Form.Button>
                                                </div>
                                            </Form>
                                        </motion.div>
                                    ) : (
                                        <motion.div
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            transition={{ ...transition, duration: 0.4, delay: 0.3 }}
                                        >
                                            <p className="p-8 text-sm text-zinc-400">
                                                Email sent! One of our agents will get in touch with you, have a wonderful day.
                                            </p>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        </motion.div>
                    </div>

                    <p className="mt-8 text-sm text-zinc-500">
                        <span className="underline">Reach out</span> to us if you need more
                        help.
                    </p>
                </div>
                <div className='absolute top-0 left-0 w-full h-full z-10 bg-radial from-transparent  to-[#10100e]'></div>
                <div className='absolute top-0 left-0 w-full h-full z-10 bg-radial from-transparent  to-[#10100e]'></div>
                <canvas className='absolute top-0 left-0' width={parent.width} height={700} id='canvas'></canvas>
            </div>
        </MotionConfig>
    );
}

let formContext = createContext({ status: '', error: false });

function Form({ email, onSubmit, className, children, ...props }: { email: string, onSubmit: () => Promise<void>, className: string, children: ReactNode }) {
    let [status, setStatus] = useState("idle")
    const [error, setError] = useState<boolean>(false)

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        if (validator.isEmail(email)) {
            setError(false)
            setStatus("saving")
            await delay(1250)
            await onSubmit()
        } else {
            setError(true)
        }
    }

    return (
        <formContext.Provider value={{ status, error }}>
            <form onSubmit={handleSubmit} {...props}>
                <fieldset disabled={status !== "idle"}>{children}</fieldset>
            </form>
        </formContext.Provider>
    );
}

Form.Button = function FormButton({ children, className, ...rest }: { children: ReactNode, className: string }) {
    let { status, error } = useContext(formContext)

    let disabled = status !== "idle"

    return (
        <MotionConfig transition={{ ...transition, duration: 0.15 }}>
            <button
                type="submit"
                disabled={disabled}
                className={`${className} ${error ? 'bg-red-500' : ''} relative transition duration-200 ${disabled ? "bg-opacity-80" : "hover:bg-opacity-80"
                    }`}
                {...rest}
            >
                <AnimatePresence mode="wait">
                    {status === "saving" && (
                        <motion.div
                            key="a"
                            initial={false}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="absolute inset-0 flex justify-center py-2"
                        >
                            <Spinner className={''} />
                        </motion.div>
                    )}

                    {status === "success" && (
                        <motion.div
                            key="b"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="absolute inset-0 flex justify-center py-2"
                        >
                            <CheckIcon className="h-full" />
                        </motion.div>
                    )}
                </AnimatePresence>
                <span className={status === "idle" ? "" : "invisible"}>{children}</span>
            </button>
        </MotionConfig>
    );
};

function Spinner({ className, ...rest }: { className: string }) {
    return (
        <svg
            viewBox="0 0 24 24"
            className={`${className} h-full w-auto animate-spin`}
            style={{
                animationTimingFunction: "steps(8, end)",
                animationDuration: ".75s",
            }}
            {...rest}
        >
            <rect
                style={{ opacity: 0.4 }}
                x={11}
                y={2}
                width={2}
                height={6}
                rx={1}
                fill="currentColor"
            />
            <rect
                style={{ opacity: 0.4 }}
                x={18.364}
                y={4.22183}
                width={2}
                height={6}
                rx={1}
                transform="rotate(45 18.364 4.222)"
                fill="currentColor"
            />
            <rect
                x={22}
                y={11}
                width={2}
                style={{ opacity: 0.4 }}
                height={6}
                rx={1}
                transform="rotate(90 22 11)"
                fill="currentColor"
            />
            <rect
                x={19.7782}
                y={18.364}
                width={2}
                style={{ opacity: 0.4 }}
                height={6}
                rx={1}
                transform="rotate(135 19.778 18.364)"
                fill="currentColor"
            />
            <rect
                x={13}
                y={22}
                width={2}
                style={{ opacity: 0.4 }}
                height={6}
                rx={1}
                transform="rotate(-180 13 22)"
                fill="currentColor"
            />
            <rect
                x={5.63603}
                y={19.7782}
                width={2}
                style={{ opacity: 0.6 }}
                height={6}
                rx={1}
                transform="rotate(-135 5.636 19.778)"
                fill="currentColor"
            />
            <rect
                x={2}
                y={13}
                width={2}
                style={{ opacity: 0.8 }}
                height={6}
                rx={1}
                transform="rotate(-90 2 13)"
                fill="currentColor"
            />
            <rect
                x={4.22183}
                y={5.63603}
                width={2}
                height={6}
                rx={1}
                transform="rotate(-45 4.222 5.636)"
                fill="currentColor"
            />
        </svg>
    );
}

async function delay(ms: number) {
    await new Promise((resolve) => setTimeout(resolve, ms));
}