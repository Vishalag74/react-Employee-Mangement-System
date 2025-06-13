import React from 'react'

const Header = (props) => {

    const logOutUser = () => {
        localStorage.setItem("loggedInUser", '')
        props.changeUser('')
    }

    return (
        <div className='flex flex-col sm:flex-row justify-between items-center bg-indigo-50 shadow-lg rounded-lg px-4 sm:px-8 py-4 sm:py-6 border border-gray-200 gap-4'>
            <h1 className='text-2xl sm:text-3xl font-extrabold text-gray-900'>Hello <br /> <span className='text-3xl sm:text-4xl font-extrabold text-indigo-700'>{props.data?.firstname || "Admin"} 👋</span></h1>
            <button onClick={logOutUser} className='bg-red-600 hover:bg-red-700 text-white font-semibold text-base sm:text-lg px-4 sm:px-6 py-2 sm:py-3 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:-translate-y-0.5'>
                Log Out
            </button>
        </div>
    )
}

export default Header