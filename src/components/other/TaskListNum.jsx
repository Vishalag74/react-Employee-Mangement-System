import React from 'react'

const TaskListNum = ({ data }) => {
    return (
        <div className='mt-4 sm:mt-6 md:mt-8 flex flex-col sm:flex-row justify-between gap-3 sm:gap-4 md:gap-5'>
            <div className='flex-1 px-4 sm:px-6 py-6 sm:py-9 bg-green-400 rounded-lg sm:rounded-xl text-blue-700 text-center'>
                <h2 className='text-2xl sm:text-3xl lg:text-4xl font-semibold'>{data.taskCounts.newTask}</h2>
                <h3 className='text-base sm:text-lg lg:text-xl font-medium'>New Task</h3>
            </div>
            <div className='flex-1 px-4 sm:px-6 py-6 sm:py-9 bg-yellow-300 rounded-lg sm:rounded-xl text-green-600 text-center'>
                <h2 className='text-2xl sm:text-3xl lg:text-4xl font-semibold'>{data.taskCounts.active}</h2>
                <h3 className='text-base sm:text-lg lg:text-xl font-medium'>Accepted Task</h3>
            </div>
            <div className='flex-1 px-4 sm:px-6 py-6 sm:py-9 bg-blue-400 rounded-lg sm:rounded-xl text-white text-center'>
                <h2 className='text-2xl sm:text-3xl lg:text-4xl font-semibold'>{data.taskCounts.completed}</h2>
                <h3 className='text-base sm:text-lg lg:text-xl font-medium'>Completed Task</h3>
            </div>
            <div className='flex-1 px-4 sm:px-6 py-6 sm:py-9 bg-red-400 rounded-lg sm:rounded-xl text-teal-950 text-center'>
                <h2 className='text-2xl sm:text-3xl lg:text-4xl font-semibold'>{data.taskCounts.failed}</h2>
                <h3 className='text-base sm:text-lg lg:text-xl font-medium'>Failed Task</h3>
            </div>
        </div>
    )
}

export default TaskListNum