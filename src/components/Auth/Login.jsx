import React, { useState } from 'react'

const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const submitHandler = (e) => {
        e.preventDefault();
        console.log(email, password);
        setEmail("");
        setPassword("");
    }

    return (
        <div className="h-screen w-screen flex items-center justify-center">
            <div className='border-2 rounded-xl border-emerald-600 p-20'>
                <form
                    onSubmit={(e) => {
                        submitHandler(e);
                    }}
                    className='flex flex-col items-center justify-center'>
                    <input required autoFocus
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                        className='outline-none border-2 border-emerald-600 text-xl rounded-full py-3 px-5 placeholder:text-gray-400'
                        type="email"
                        placeholder='Enter your email' />
                    <input required
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                        className=' mt-3 outline-none border-2 border-emerald-600 text-xl rounded-full py-3 px-5 placeholder:text-gray-400'
                        type="password"
                        placeholder='Enter password' />
                    <button
                        className='mt-5 outline-none border-none bg-emerald-600 text-xl rounded-full py-3 px-5 placeholder:text-white'>
                        Login
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Login