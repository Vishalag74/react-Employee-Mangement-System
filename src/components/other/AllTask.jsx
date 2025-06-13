import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const AllTask = () => {

    const [userData, setuserData] = useContext(AuthContext)

    return (
        <div className='bg-white p-8 mt-8 rounded-2xl shadow-xl max-w-5xl mx-auto'>
            <div className='bg-red-50 gap-4 mb-4 py-3 px-6 flex justify-between rounded-lg'>
                <h2 className='text-xl font-extrabold flex justify-center w-1/5 text-red-400'>Employee Name</h2>
                <h3 className='text-xl font-extrabold flex justify-center w-1/5 text-red-400'>New Task</h3>
                <h5 className='text-xl font-extrabold flex justify-center w-1/5 text-red-400'>Active Task</h5>
                <h5 className='text-xl font-extrabold flex justify-center w-1/5 text-red-400'>Completed</h5>
                <h5 className='text-xl font-extrabold flex justify-center w-1/5 text-red-400'>Failed</h5>
            </div>
            <div className=''>
                {userData.map(function (elem, idx) {
                    return <div key={idx} className='bg-gray-50 gap-4 mb-4 py-3 px-6 flex justify-between rounded-lg shadow-md'>
                        <h2 className='text-lg font-semibold flex justify-center w-1/5 text-indigo-700'>{elem.firstname}</h2>
                        <h3 className='text-lg font-semibold flex justify-center w-1/5 text-blue-400'>{elem.taskCounts.newTask}</h3>
                        <h5 className='text-lg font-semibold flex justify-center w-1/5 text-yellow-400'>{elem.taskCounts.active}</h5>
                        <h5 className='text-lg font-semibold flex justify-center w-1/5 text-green-400'>{elem.taskCounts.completed}</h5>
                        <h5 className='text-lg font-semibold flex justify-center w-1/5 text-red-400'>{elem.taskCounts.failed}</h5>
                    </div>
                })}
            </div>
        </div>
    )
}

export default AllTask