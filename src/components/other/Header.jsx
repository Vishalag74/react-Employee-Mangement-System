import React from 'react'

const Header = (props) => {

    const logOutUser = () => {
        localStorage.setItem("loggedInUser", '')
        props.changeUser('')
    }

    return (
        <div className='flex flex-col sm:flex-row justify-between items-center bg-indigo-50 shadow-lg rounded-lg px-3 sm:px-4 md:px-6 lg:px-8 py-3 sm:py-4 md:py-5 border border-gray-200 gap-3 sm:gap-4'>
            <h1 className='text-lg sm:text-xl md:text-2xl lg:text-3xl font-extrabold text-gray-900 text-center sm:text-left'>
                Hello <br className="sm:hidden" /> 
                <span className='text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold text-indigo-700'>
                    {props.data?.firstname || "Admin"} 👋
                </span>
            </h1>
            <button onClick={logOutUser} className='bg-red-600 hover:bg-red-700 text-white font-semibold text-sm sm:text-base md:text-lg px-3 sm:px-4 md:px-6 py-2 sm:py-2.5 md:py-3 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:-translate-y-0.5 w-full sm:w-auto'>
                Log Out
            </button>
        </div>
    )
}

export default Header