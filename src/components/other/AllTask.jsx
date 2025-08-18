import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const AllTask = () => {

    const [userData, setuserData] = useContext(AuthContext)

    return (
        <div className='bg-white p-4 sm:p-6 md:p-8 mt-4 sm:mt-6 md:mt-8 rounded-2xl shadow-xl w-full max-w-full lg:max-w-5xl mx-auto overflow-x-auto'>
            <div className='bg-red-50 gap-2 sm:gap-3 md:gap-4 mb-3 sm:mb-4 py-2 sm:py-3 px-3 sm:px-4 md:px-6 flex justify-between rounded-lg'>
                <h2 className='text-sm sm:text-base md:text-lg lg:text-xl font-extrabold flex justify-center min-w-[100px] sm:min-w-[120px] md:min-w-[150px] text-red-400'>Employee</h2>
                <h3 className='text-sm sm:text-base md:text-lg lg:text-xl font-extrabold flex justify-center min-w-[60px] sm:min-w-[80px] md:min-w-[100px] text-red-400'>New</h3>
                <h5 className='text-sm sm:text-base md:text-lg lg:text-xl font-extrabold flex justify-center min-w-[60px] sm:min-w-[80px] md:min-w-[100px] text-red-400'>Active</h5>
                <h5 className='text-sm sm:text-base md:text-lg lg:text-xl font-extrabold flex justify-center min-w-[60px] sm:min-w-[80px] md:min-w-[100px] text-red-400'>Done</h5>
                <h5 className='text-sm sm:text-base md:text-lg lg:text-xl font-extrabold flex justify-center min-w-[60px] sm:min-w-[80px] md:min-w-[100px] text-red-400'>Failed</h5>
            </div>
            <div>
                {userData.map(function (elem, idx) {
                    return <div key={idx} className='bg-gray-50 gap-2 sm:gap-3 md:gap-4 mb-3 sm:mb-4 py-2 sm:py-3 px-3 sm:px-4 md:px-6 flex justify-between rounded-lg shadow-md min-w-max'>
                        <h2 className='text-xs sm:text-sm md:text-base lg:text-lg font-semibold flex justify-center min-w-[100px] sm:min-w-[120px] md:min-w-[150px] text-indigo-700'>{elem.firstname}</h2>
                        <h3 className='text-xs sm:text-sm md:text-base lg:text-lg font-semibold flex justify-center min-w-[60px] sm:min-w-[80px] md:min-w-[100px] text-blue-400'>{elem.taskCounts.newTask}</h3>
                        <h5 className='text-xs sm:text-sm md:text-base lg:text-lg font-semibold flex justify-center min-w-[60px] sm:min-w-[80px] md:min-w-[100px] text-yellow-400'>{elem.taskCounts.active}</h5>
                        <h5 className='text-xs sm:text-sm md:text-base lg:text-lg font-semibold flex justify-center min-w-[60px] sm:min-w-[80px] md:min-w-[100px] text-green-400'>{elem.taskCounts.completed}</h5>
                        <h5 className='text-xs sm:text-sm md:text-base lg:text-lg font-semibold flex justify-center min-w-[60px] sm:min-w-[80px] md:min-w-[100px] text-red-400'>{elem.taskCounts.failed}</h5>
                    </div>
                })}
            </div>
        </div>
    )
}

export default AllTask