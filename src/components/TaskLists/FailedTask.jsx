import React from 'react'

const FailedTask = ({ data }) => {
    return (
        <div className='w-full h-auto p-3 sm:p-4 md:p-5 bg-red-200 rounded-xl sm:rounded-2xl shadow-md'>
            <div className='flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2'>
                <h3 className='bg-red-200 text-xs sm:text-sm px-2 sm:px-3 py-1 rounded text-red-700 w-fit'>{data.category}</h3>
                <h4 className='text-xs sm:text-sm text-gray-700'>{data.taskDate}</h4>
            </div>
            <h2 className='text-lg sm:text-xl md:text-2xl font-semibold mt-3 sm:mt-4 md:mt-5 text-gray-900'>{data.taskTitle}</h2>
            <p className='text-xs sm:text-sm mt-2 text-gray-700 line-clamp-3 sm:line-clamp-4'>{data.taskDescription}</p>
            <div className='mt-3 sm:mt-4'>
                <button className='w-full bg-red-500 hover:bg-red-600 text-xs sm:text-sm text-white rounded-md shadow-md py-2 transition'>Failed</button>
            </div>
        </div>
    )
}

export default FailedTask