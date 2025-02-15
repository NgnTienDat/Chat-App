import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faEllipsis, faPenToSquare } from '@fortawesome/free-solid-svg-icons'


const UserInfo = () => {
    return (
        <div className='flex justify-between items-center p-3 relative'>
            <div className='flex items-center gap-3'>
                <img src='/images/1.jpg' alt='' className='size-12 rounded-[10px] object-cover' />
                <h3 className='font-medium text-white text-lg'>John Wick</h3>
            </div>
            <div className='flex gap-3 absolute top-3 right-3'>
                <button onClick={() => console.log('Click more')}>
                    <FontAwesomeIcon icon={faEllipsis} className='text-white text-2xl cursor-pointer' />
                </button>
                <button onClick={() => console.log('Click edit')}>
                    <FontAwesomeIcon icon={faPenToSquare} className='text-white text-md cursor-pointer' />
                    <FontAwesomeIcon icon="fa-light fa-pen-to-square" />
                </button>
            </div>
        </div>
    )
}

export default UserInfo