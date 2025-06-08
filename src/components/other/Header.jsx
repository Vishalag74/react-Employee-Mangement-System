import React from 'react'

const Header = () => {
    return (
        <div className='flex justify-between items-end'>
            <h1 className='text-2xl font-semibold'>Hello <br /> <span className='text-3xl font-semibold'>Vishal 👋</span></h1>
            <button className='bg-red-600 font-medium text-lg px-5 py-2 rounded-sm'>Log Out</button>
        </div>
    )
}

export default Header