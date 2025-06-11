import React, { useState } from 'react'
import { setLocalStorage } from '../../utils/LocalStorage'

const Header = (props) => {

    const logOutUser = () => {
        localStorage.setItem("loggedInUser", '')
        props.changeUser('')
    }

    return (
        <div className='flex justify-between items-end'>
            <h1 className='text-2xl font-semibold'>Hello <br /> <span className='text-3xl font-semibold'>{props.data?.firstname || "username"} 👋</span></h1>
            <button onClick={logOutUser} className='bg-red-600 text-white font-medium text-lg px-5 py-2 rounded-sm'>Log Out</button>
        </div>
    )
}

export default Header