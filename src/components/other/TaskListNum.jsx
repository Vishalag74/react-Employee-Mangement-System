import React from 'react'

const TaskListNum = ({ data }) => {
    return (
        <div className='mt-10 flex  justify-between gap-5'>
            <div className='w-full sm:w-[45%] px-6 py-9 bg-green-400 rounded-xl text-blue-700'>
                <h2 className='text-3xl font-semibold'>{data.taskCounts.newTask}</h2>
                <h3 className='text-xl font-medium'>New Task</h3>
            </div>
            <div className='w-full sm:w-[45%] px-6 py-9 bg-yellow-300 rounded-xl text-green-600 '>
                <h2 className='text-3xl font-semibold'>{data.taskCounts.active}</h2>
                <h3 className='text-xl font-medium'>Accepted Task</h3>
            </div>
            <div className='w-full sm:w-[45%] px-6 py-9 bg-blue-400 rounded-xl text-white'>
                <h2 className='text-3xl font-semibold'>{data.taskCounts.completed}</h2>
                <h3 className='text-xl font-medium'>Completed Task</h3>
            </div>
            <div className='w-full sm:w-[45%] px-6 py-9  bg-red-400 rounded-xl text-teal-950'>
                <h2 className='text-3xl font-semibold'>{data.taskCounts.failed}</h2>
                <h3 className='text-xl font-medium'>Failed Task</h3>
            </div>
        </div>
    )
}

export default TaskListNum