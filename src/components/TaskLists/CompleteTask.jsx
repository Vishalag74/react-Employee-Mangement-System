import React from 'react'

const CompleteTask = ({ data }) => {
    return (
        <div className='flex-shrink-0 h-full w-[300px] p-5 bg-blue-200 rounded-2xl shadow-md'>
            <div className='flex justify-between items-center'>
                <h3 className='bg-red-200 text-sm px-3 py-1 rounded text-red-700 '>{data.category}</h3>
                <h4 className='text-sm text-gray-700'>{data.taskDate}</h4>
            </div>
            <h2 className='text-2xl font-semibold mt-5 text-gray-900'>{data.taskTitle}</h2>
            <p className='text-sm mt-2 text-gray-700'>{data.taskDescription}</p>
            <div className='mt-5'>
                <button className='w-full bg-indigo-500 hover:bg-indigo-600 text-white rounded-md shadow-md py-2 transition'>Completed</button>
            </div>
        </div>
    )
}

export default CompleteTask