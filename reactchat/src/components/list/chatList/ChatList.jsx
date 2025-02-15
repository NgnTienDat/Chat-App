import { faMagnifyingGlass, faMinus, faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'

const ChatList = () => {
  const [addMore, setAddMore] = useState(false)


  return (
    <div className='px-3 fex-1 overflow-scroll no-scrollbar'>
      <div className='flex items-center justify-between gap-2'>
        <div className='flex flex-1 items-center bg-[#00000047] rounded-sm pl-2 py-[3px] gap-x-2'>
          <FontAwesomeIcon icon={faMagnifyingGlass} className='text-white' />
          <input type='text' placeholder='Search' className='w-full bg-transparent outline-none text-white text-sm py-[5px]' />
        </div>
        <button className='mr-3 px-1 py-[1px] rounded-sm bg-[#00000047] cursor-pointer'
          onClick={() => setAddMore(prev => !prev)}
        >
          <FontAwesomeIcon icon={addMore ? faMinus : faPlus} className='text-white ' />
        </button>
      </div>
      <div className='flex items-center mt-3 cursor-pointer'>
        <img src='/images/4.jpg' alt='' className='size-15 rounded-[20px] object-cover' />
        <div className='ml-3'>
          <span className='font-medium text-white'>Emma Stone</span>
          <p className='text-white text-sm'>Hi there!!</p>
        </div>
      </div>

    </div>
  )
}

export default ChatList