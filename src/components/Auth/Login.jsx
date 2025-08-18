import React, { useState } from 'react'

const Login = ({ handleLogin }) => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [selectedRole, setSelectedRole] = useState("");

    const submitHandler = (e) => {
        e.preventDefault();
        handleLogin(email, password);
        setEmail("");
        setPassword("");
        setSelectedRole("");
    }

    const handleRoleChange = (e) => {
        const role = e.target.value;
        setSelectedRole(role);

        // Auto-fill credentials based on selected role
        const credentials = {
            "admin": { email: "admin@gmail.com", password: "123" },
            "employee1": { email: "employee1@gmail.com", password: "123" },
            "employee2": { email: "employee2@gmail.com", password: "123" },
            "employee3": { email: "employee3@gmail.com", password: "123" },
            "employee4": { email: "employee4@gmail.com", password: "123" },
            "employee5": { email: "employee5@gmail.com", password: "123" }
        };

        if (credentials[role]) {
            setEmail(credentials[role].email);
            setPassword(credentials[role].password);
        } else {
            setEmail("");
            setPassword("");
        }
    }

    return (
        <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-r from-indigo-100 via-purple-100 to-pink-100 p-4">
            <div className='border-2 rounded-2xl border-indigo-300 py-8 px-4 sm:py-10 sm:px-8 md:px-12 bg-white shadow-2xl w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg'>
                <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-indigo-600 mb-2 text-center">User LogIn</h1>
                <form
                    onSubmit={(e) => {
                        submitHandler(e);
                    }}
                    className='flex flex-col items-center justify-center'>

                    {/* Quick Login Dropdown - Positioned directly under heading */}
                    <div className="mb-4 sm:mb-6 mt-4 sm:mt-6">
                        <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 items-center">
                            <label className="text-sm sm:text-base font-semibold text-indigo-700">
                                Login as :
                            </label>
                            <select
                                value={selectedRole}
                                onChange={handleRoleChange}
                                className="outline-none border-2 border-indigo-300 bg-white text-sm sm:text-base rounded-lg py-2 px-3 text-indigo-700 focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400 transition-all duration-200 hover:border-indigo-500 w-full sm:w-auto"
                            >
                                <option value="">-- Select User --</option>
                                <option value="admin">Admin</option>
                                <option value="employee1">Employee 1 (Amit)</option>
                                <option value="employee2">Employee 2 (Neha)</option>
                                <option value="employee3">Employee 3 (Ravi)</option>
                                <option value="employee4">Employee 4 (Priya)</option>
                                <option value="employee5">Employee 5 (Karan)</option>
                            </select>
                        </div>
                    </div>

                    <input required
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                        className='outline-none border-2 bg-indigo-50 border-indigo-400 text-base sm:text-lg md:text-xl rounded-full py-2 sm:py-3 px-4 sm:px-6 placeholder:text-indigo-600 shadow-sm focus:ring-4 focus:ring-indigo-300 transition w-full'
                        type="email"
                        placeholder='Enter your email' />
                    <input required
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                        className='outline-none border-2 mt-4 sm:mt-6 bg-indigo-50 border-indigo-400 text-base sm:text-lg md:text-xl rounded-full py-2 sm:py-3 px-4 sm:px-6 placeholder:text-indigo-600 shadow-sm focus:ring-4 focus:ring-indigo-300 transition w-full'
                        type="password"
                        placeholder='Enter password' />
                    <button
                        type="submit"
                        className='font-medium mt-4 sm:mt-6 bg-indigo-600 hover:bg-indigo-700 text-white text-base sm:text-lg md:text-xl rounded-full py-2 sm:py-3 px-4 sm:px-6 shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1 w-full'>
                        Login
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Login