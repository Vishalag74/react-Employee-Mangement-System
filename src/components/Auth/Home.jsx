import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
    const navigate = useNavigate()

    const handleLoginRedirect = () => {
        navigate('/login')
    }

    return (
        <div className="min-h-screen w-full flex flex-col items-center justify-center bg-gradient-to-r from-indigo-100 via-purple-100 to-pink-100 p-4">
            <div className="max-w-4xl mx-auto text-center">
                {/* Main Heading - Responsive text sizes */}
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6">
                    Welcome to <span className="text-indigo-600">ZployHub</span>
                </h1>
                
                {/* Subtitle - Responsive text sizes */}
                <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 mb-6 sm:mb-8 md:mb-10 leading-relaxed">
                    Smart hub to simplify task management and empower every Employee.
                </p>
                
                {/* CTA Button - Responsive sizing and spacing */}
                <button
                    onClick={handleLoginRedirect}
                    className="font-medium w-full sm:w-auto sm:min-w-[200px] md:min-w-[240px] lg:min-w-[280px] bg-indigo-600 hover:bg-indigo-700 text-white text-lg sm:text-xl md:text-2xl rounded-full py-3 sm:py-4 px-6 sm:px-8 shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-xl active:scale-95">
                    Get Started 🚀
                </button>
            </div>
            
            {/* Optional: Add some responsive spacing at bottom for better mobile experience */}
            <div className="h-8 sm:h-12 md:h-16"></div>
        </div>
    )
}

export default Home
