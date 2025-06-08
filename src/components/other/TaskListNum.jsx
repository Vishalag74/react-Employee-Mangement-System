import React from 'react'

const TaskListNum = () => {
    return (
        <div className='mt-10 flex screen justify-between gap-5'>
            <div className='w-[45%] px-6 py-9 bg-red-400 rounded-xl '>
                <h2 className='text-3xl font-semibold'>0</h2>
                <h3 className='text-xl font-medium'>New Task</h3>
            </div>
            <div className='w-[45%] px-6 py-9 bg-blue-400 rounded-xl '>
                <h2 className='text-3xl font-semibold'>0</h2>
                <h3 className='text-xl font-medium'>New Task</h3>
            </div>
            <div className='w-[45%] px-6 py-9 bg-green-400 rounded-xl '>
                <h2 className='text-3xl font-semibold'>0</h2>
                <h3 className='text-xl font-medium'>New Task</h3>
            </div>
            <div className='w-[45%] px-6 py-9 bg-yellow-400 rounded-xl '>
                <h2 className='text-3xl font-semibold'>0</h2>
                <h3 className='text-xl font-medium'>New Task</h3>
            </div>
        </div>
    )
}

export default TaskListNum