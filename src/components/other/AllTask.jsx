import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const AllTask = () => {

    const [userData,setuserData] = useContext(AuthContext)

    return (
        <div className='bg-[#1c1c1c] p-5 mt-5 rounded'>
            <div className='bg-red-400 gap-2 mb-2 py-2 px-4 flex justify-between rounded'>
                <h2 className='text-lg font-medium flex justify-center w-1/5 bg-red-600'>Employee Name</h2>
                <h3 className='text-lg font-medium flex justify-center w-1/5 bg-red-600'>New Task</h3>
                <h5 className='text-lg font-medium flex justify-center w-1/5 bg-red-600'>Activr Task</h5>
                <h5 className='text-lg font-medium flex justify-center w-1/5 bg-red-600'>Completed</h5>
                <h5 className='text-lg font-medium flex justify-center w-1/5 bg-red-600'>Failed</h5>
            </div>
            <div className=''>
                {userData.map(function (elem, idx) {
                    return <div key={idx} className='bg-gray-500 gap-2 mb-2 py-2 px-4 flex justify-between rounded'>
                        <h2 className='text-lg font-medium flex justify-center w-1/5 bg-gray-500'>{elem.firstname}</h2>
                        <h3 className='text-lg font-medium flex justify-center w-1/5 bg-blue-600'>{elem.taskCounts.newTask}</h3>
                        <h5 className='text-lg font-medium flex justify-center w-1/5 bg-yellow-600'>{elem.taskCounts.active}</h5>
                        <h5 className='text-lg font-medium flex justify-center w-1/5 bg-green-600'>{elem.taskCounts.completed}</h5>
                        <h5 className='text-lg font-medium flex justify-center w-1/5 bg-red-600'>{elem.taskCounts.failed}</h5>
                    </div>
                })}
            </div>
        </div>
    )
}

export default AllTask