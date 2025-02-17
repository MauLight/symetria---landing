import { useState, type ReactNode } from 'react'
import * as Icons from "@heroicons/react/outline"
import { AnimatePresence, motion } from 'framer-motion';

let titles = [
    ["Apple's newest iPhone is here", "Watch our July event"],
    [
        "Nintendo's Newsletter for July",
        "Introducing Strike, a 5-on-5 soccer game",
    ],
    ["Your funds have been processed", "See your latest deposit online"],
    ["This Week in Sports", "The finals are heating up"],
    ["Changelog update", "Edge subroutines and more"],
    ["React Hawaii is here!", "Time for fun in the sun"],
]

function EmailClient(): ReactNode {
    const [messages, setMessages] = useState([...Array(9).keys()]);
    const [selectedMessages, setSelectedMessages] = useState<number[]>([]);

    function toggleMessage(mid: number) {
        if (selectedMessages.includes(mid)) {
            setSelectedMessages((messages) => messages.filter((id) => id !== mid));
        } else {
            setSelectedMessages((messages) => [mid, ...messages]);
        }
    }

    function addMessage() {
        let newId = (messages.at(-1) || 0) + 1;
        setMessages((messages) => [...messages, newId]);
    }

    function archiveMessages() {
        setMessages((messages) =>
            messages.filter((id) => !selectedMessages.includes(id))
        );
        setSelectedMessages([]);
    }
    return (
        <div className="flex w-full">
            <div className="mx-auto h-[600px] flex w-full max-w-3xl flex-1 overflow-hidden rounded-[12px] bg-white ">
                <div className="flex w-[45%] flex-col bg-slate-50 py-2">

                    {/* Header */}
                    <div className="border-b border-gray-300 px-5">
                        <div className="flex justify-between py-2 text-right">
                            <button
                                onClick={addMessage}
                                className="-mx-2 rounded px-2 py-1 text-slate-400 hover:text-slate-500 active:bg-slate-200"
                            >
                                <Icons.MailIcon className="h-5 w-5 " />
                            </button>
                            <button
                                onClick={archiveMessages}
                                className="-mx-2 rounded px-2 py-1 text-slate-400 hover:text-slate-500 active:bg-slate-200"
                            >
                                <Icons.ArchiveIcon className="h-5 w-5" />
                            </button>
                        </div>
                    </div>

                    {/* Messages */}
                    <ul className="overflow-y-scroll px-3 pt-2">
                        <AnimatePresence initial={false}>
                            {[...messages].reverse().map((mid) => (
                                <motion.li
                                    key={mid}
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: 'auto' }}
                                    transition={{
                                        type: 'spring',
                                        bounce: 0.3,
                                        duration: 0.5
                                    }}
                                    exit={{
                                        opacity: 0,
                                        height: 0
                                    }}
                                    className="relative"
                                >
                                    <div className="py-0.5">
                                        <button
                                            onClick={() => toggleMessage(mid)}
                                            className={`${selectedMessages.includes(mid)
                                                ? "bg-blue-500"
                                                : "hover:bg-slate-200"
                                                } block w-full cursor-pointer truncate rounded py-3 px-3 text-left transition-color duration-200`}
                                        >
                                            <p
                                                className={`${selectedMessages.includes(mid)
                                                    ? "text-white"
                                                    : "text-slate-500"
                                                    } truncate text-sm font-medium`}
                                            >
                                                {titles[mid % titles.length][0]}
                                            </p>
                                            <p
                                                className={`${selectedMessages.includes(mid)
                                                    ? "text-blue-200"
                                                    : "text-slate-400"
                                                    } truncate text-xs`}
                                            >
                                                {titles[mid % titles.length][1]}
                                            </p>
                                        </button>
                                    </div>
                                </motion.li>
                            ))}
                        </AnimatePresence>
                    </ul>

                </div>

                {/* Body */}
                <div className="flex-1 overflow-y-scroll border-l border-gray-300 px-8 py-8">
                    <h1 className="h-8 rounded bg-slate-100 text-2xl font-bold" />
                    <div className="mt-8 space-y-6">
                        {[...Array(9).keys()].map((i) => (
                            <div key={i} className="space-y-2 text-sm">
                                <p className="h-4 w-5/6 rounded bg-slate-100" />
                                <p className="h-4 rounded bg-slate-100" />
                                <p className="h-4 w-4/6 rounded bg-slate-100" />
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    )
}

export default EmailClient
