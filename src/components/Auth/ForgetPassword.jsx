import React, { useState } from 'react'
import { FaArrowLeft } from 'react-icons/fa'

const ForgetPassword = ({ onBackToLogin }) => {
    const [email, setEmail] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!email) {
            alert("Please enter your email.");
            return;
        }
        alert(`Password reset link sent to ${email}`);
        onBackToLogin();
    };

    return (
        <div className="h-screen w-screen flex flex-col items-center justify-center bg-gradient-to-r from-indigo-100 via-purple-100 to-pink-100 relative">
            <div className='border-2 rounded-2xl border-indigo-300 p-16 bg-white shadow-2xl max-w-md w-full flex flex-col items-center'>
                <div className="relative w-full mb-6 flex justify-center">
                    <button
                        onClick={onBackToLogin}
                        className="absolute -top-6 left-0 text-indigo-500 hover:text-indigo-800 text-xl cursor-pointer"
                        aria-label="Back to Login">
                        <FaArrowLeft />
                    </button>
                    <h1 className="text-2xl font-bold text-indigo-600">Forget Password</h1>
                </div>
                <form onSubmit={handleSubmit} className="w-full flex flex-col items-center">
                    <input
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="outline-none border-2 bg-indigo-50 border-indigo-400 text-xl rounded-full py-3 px-6 placeholder: text-indigo-600 shadow-sm focus:ring-4 focus:ring-indigo-300 transition w-full mb-6"
                    />
                    <button
                        type="submit"
                        className='font-medium bg-indigo-600 hover:bg-indigo-700 text-white text-xl rounded-full py-3 px-6 shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1 w-full'>
                        Get Password
                    </button>
                </form>
            </div>
        </div>
    )
}

export default ForgetPassword
