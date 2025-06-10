import React from 'react'

const NewTask = () => {
    return (
        <div className='flex-shrink-0 h-full w-[300px] p-5 bg-yellow-400 rounded-xl'>
            <div className='flex justify-between items-center'>
                <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>High</h3>
                <h4 className='text-sm'>20 feb 2025</h4>
            </div>
            <h2 className='text-2xl font-semibold mt-5'>Make a yt video</h2>
            <p className='text-sm mt-2'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam, soluta quibusdam nobis at tenetur mollitia?</p>
        <div className='mt-4'>
            <button className='bg-green-500 py-1 px-2 text-sm'>Accept Task</button>
        </div>
        </div>
    )
}

export default NewTask