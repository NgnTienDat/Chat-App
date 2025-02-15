import { faCircleInfo, faFaceSmile, faImage, faMicrophone, faPaperPlane, faPhone, faVideo } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import EmojiPicker from 'emoji-picker-react'

const Chat = () => {
    const [openEmoji, setOpenEmoji] = useState(false)
    const [text, setText] = useState('')


    const handleEmoji = e => {
        setText(prev => prev + e.emoji)
    }
    return (
        <div className='flex-2 flex flex-col border-l-1 border-r-1 border-gray-500'>
            <div className="top flex items-center justify-between px-3 py-3">
                <div className='user flex gap-4'>
                    <img src='/images/4.jpg' alt='' className='size-12 rounded-[10px] object-cover' />
                    <div className='text-white'>
                        <span className='font-medium'>Emma Stone</span>
                        <p className='text-sm text-gray-500'>React js Tailwindcss</p>
                    </div>
                </div>
                <div className='icons text-white flex gap-3'>
                    <FontAwesomeIcon icon={faPhone} />
                    <FontAwesomeIcon icon={faVideo} />
                    <FontAwesomeIcon icon={faCircleInfo} />
                </div>
            </div>
            <div className="center flex-1 p-5 flex flex-col overflow-scroll no-scrollbar gap-5 text-white">
                <div className='message w-[70%] flex gap-3'>
                    <img src='/images/4.jpg' alt='' className='size-10 rounded-[10px] object-cover' />
                    <div>
                        <p>Hello John, i'm Emma</p>
                        <span className='text-sm text-gray-500'>1 min ago</span>
                    </div>
                </div>
                <div className='message own'>
                    <div>
                        <p>Hello John, i'm Emma</p>
                        <span className='text-sm text-gray-500'>1 min ago</span>
                    </div>
                </div>
                <div className='message w-[70%] flex  gap-3'>
                    <img src='/images/4.jpg' alt='' className='size-10 rounded-[10px] object-cover' />
                    <div>
                        <p>Hello John, i'm Emma</p>
                        <span className='text-sm text-gray-500'>1 min ago</span>
                    </div>
                </div>
                <div className='message'>
                    <div>
                        <p>Hello John, i'm Emma</p>
                        <span className='text-sm text-gray-500'>1 min ago</span>
                    </div>
                </div>
                <div className='message w-[70%] flex gap-3'>
                    <img src='/images/4.jpg' alt='' className='size-10 rounded-[10px] object-cover' />
                    <div>
                        <p>Hello John, i'm Emma</p>
                        <span className='text-sm text-gray-500'>1 min ago</span>
                    </div>
                </div>
                <div className='message own'>
                    <div>
                        <p>Hello John, i'm Emma</p>
                        <span className='text-sm text-gray-500'>1 min ago</span>
                    </div>
                </div>
                <div className='message w-[70%] flex  gap-3'>
                    <img src='/images/4.jpg' alt='' className='size-10 rounded-[10px] object-cover' />
                    <div>
                        <p>Hello John, i'm Emma</p>
                        <span className='text-sm text-gray-500'>1 min ago</span>
                    </div>
                </div>
                <div className='message'>
                    <div>
                        <p>Hello John, i'm Emma</p>
                        <span className='text-sm text-gray-500'>1 min ago</span>
                    </div>
                </div>
                <div className='message w-[70%] flex gap-3'>
                    <img src='/images/4.jpg' alt='' className='size-10 rounded-[10px] object-cover' />
                    <div>
                        <p>Hello John, i'm Emma</p>
                        <span className='text-sm text-gray-500'>1 min ago</span>
                    </div>
                </div>
                <div className='message own'>
                    <div>
                        <p>Hello John, i'm Emma</p>
                        <span className='text-sm text-gray-500'>1 min ago</span>
                    </div>
                </div>
                <div className='message w-[70%] flex  gap-3'>
                    <img src='/images/4.jpg' alt='' className='size-10 rounded-[10px] object-cover' />
                    <div>
                        <p>Hello John, i'm Emma</p>
                        <span className='text-sm text-gray-500'>1 min ago</span>
                    </div>
                </div>
                <div className='message'>
                    <div>
                        <p>Hello John, i'm Emma</p>
                        <span className='text-sm text-gray-500'>1 min ago</span>
                    </div>
                </div>
                <div className='message w-[70%] flex gap-3'>
                    <img src='/images/4.jpg' alt='' className='size-10 rounded-[10px] object-cover' />
                    <div>
                        <p>Hello John, i'm Emma</p>
                        <span className='text-sm text-gray-500'>1 min ago</span>
                    </div>
                </div>
                <div className='message own'>
                    <div>
                        <p>Hello John, i'm Emma</p>
                        <span className='text-sm text-gray-500'>1 min ago</span>
                    </div>
                </div>
                <div className='message w-[70%] flex  gap-3'>
                    <img src='/images/4.jpg' alt='' className='size-10 rounded-[10px] object-cover' />
                    <div>
                        <p>Hello John, i'm Emma</p>
                        <span className='text-sm text-gray-500'>1 min ago</span>
                    </div>
                </div>
                <div className='message'>
                    <div>
                        <p>Hello John, i'm Emma</p>
                        <span className='text-sm text-gray-500'>1 min ago</span>
                    </div>
                </div>
            </div>
            <div className="bottom flex p-3 items-center justify-between gap-x-4">
                <div className='text-white flex gap-3'>
                    <FontAwesomeIcon icon={faImage} />
                    <FontAwesomeIcon icon={faMicrophone} />
                </div>
                <div className='flex-1 text-white bg-[#00000047] p-[6px] rounded-[10px]'>
                    <input type="text" placeholder='Type a message...'
                        className='outline-none w-full px-2'
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                    />
                </div>
                <div className='text-white flex gap-2 flex items-center'>
                    <div className='emoji relative'>
                        <FontAwesomeIcon icon={faFaceSmile} onClick={() => setOpenEmoji(prev => !prev)} />
                        <div className='picker absolute bottom-10 right-0 scale-75 origin-bottom-right'>
                            <EmojiPicker open={openEmoji} onEmojiClick={handleEmoji} />
                        </div>
                    </div>
                    <FontAwesomeIcon icon={faPaperPlane} />
                </div>
            </div>
        </div>
    )
}

export default Chat