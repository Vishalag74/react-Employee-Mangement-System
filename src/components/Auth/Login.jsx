import React, { useState } from 'react'

const Login = ({ handleLogin, onForgetPasswordClick }) => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const submitHandler = (e) => {
        e.preventDefault();
        handleLogin(email, password);
        setEmail("");
        setPassword("");
    }

    return (
        <div className="h-screen w-screen flex items-center justify-center bg-gradient-to-r from-indigo-100 via-purple-100 to-pink-100">
            <div className='border-2 rounded-2xl border-indigo-300 p-16 bg-white shadow-2xl max-w-md w-full'>
                <h1 className="text-2xl font-bold text-indigo-600 mb-6 text-center">LogIn</h1>
                <form
                    onSubmit={(e) => {
                        submitHandler(e);
                    }}
                    className='flex flex-col items-center justify-center'>
                    <input required
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                        className='outline-none border-2 bg-indigo-50 border-indigo-400 text-xl rounded-full py-3 px-6 placeholder: text-indigo-600 shadow-sm focus:ring-4 focus:ring-indigo-300 transition'
                        type="email"
                        placeholder='Enter your email' />
                    <input required
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                        className='outline-none border-2 mt-6 bg-indigo-50 border-indigo-400 text-xl rounded-full py-3 px-6 placeholder: text-indigo-600 shadow-sm focus:ring-4 focus:ring-indigo-300 transition'
                        type="password"
                        placeholder='Enter password' />
                    <div className="flex justify-between items-center mt-6 w-full px-6">
                        <h1 onClick={onForgetPasswordClick} className='text-indigo-500 cursor-pointer'>forget password?</h1>
                        <button
                            type="submit"
                            className='font-medium bg-indigo-600 hover:bg-indigo-700 text-white text-xl rounded-full py-3 px-6 shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1'>
                            Login
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login