import React, { useContext, useState } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const CreateTask = ({ onTaskCreated }) => {

    const [userData, setuserData] = useContext(AuthContext)

    const [taskTitle, setTaskTitle] = useState('')
    const [taskDescription, setTaskDescription] = useState('')
    const [taskDate, setTaskDate] = useState('')
    const [assignTo, setassignTo] = useState('')
    const [category, setcategory] = useState('')

    const submitHandler = (e) => {
        e.preventDefault()

        const newTask = { taskTitle, taskDescription, taskDate, category, active: false, newTask: true, failed: false, completed: false }

        const updatedUserData = userData.map((elem) => {
            if (elem.firstname === assignTo) {
                const updatedElem = {
                    ...elem,
                    tasks: [...elem.tasks, newTask],
                    taskCounts: {
                        ...elem.taskCounts,
                        newTask: (elem.taskCounts.newTask || 0) + 1
                    }
                }
                if (onTaskCreated) {
                    onTaskCreated(updatedElem)
                }
                return updatedElem
            }
            return elem
        })

        setuserData(updatedUserData)
        alert('Task created successfully')

        setTaskTitle('')
        setTaskDescription('')
        setTaskDate('')
        setassignTo('')
        setcategory('')

    }

    return (
        <div className='p-4 sm:p-5 md:p-6 bg-white bg-opacity-90 backdrop-blur-md rounded-2xl sm:rounded-3xl shadow-xl mt-4 sm:mt-6 md:mt-8 w-full max-w-full lg:max-w-4xl mx-auto'>
            <form onSubmit={(e) => {
                submitHandler(e);
            }}
                className='flex flex-col lg:flex-row w-full items-start justify-between gap-6 sm:gap-8 lg:gap-10'>
                <div className='w-full lg:w-1/2 space-y-4 sm:space-y-6 md:space-y-8'>
                    <div>
                        <h3 className='text-base sm:text-lg md:text-xl text-indigo-900 font-bold mb-2 sm:mb-3'>Task Title</h3>
                        <input required
                            value={taskTitle}
                            onChange={(e) => setTaskTitle(e.target.value)}
                            className='text-sm sm:text-base md:text-lg py-2 sm:py-3 md:py-4 px-3 sm:px-4 md:px-5 w-full rounded-lg sm:rounded-xl outline-none bg-indigo-50 border border-indigo-300 shadow-md placeholder:text-indigo-500 focus:ring-2 focus:ring-indigo-500 transition duration-300 ease-in-out' type="text" placeholder='Enter Task Title' />
                    </div>
                    <div>
                        <h3 className='text-base sm:text-lg md:text-xl text-indigo-900 font-bold mb-2 sm:mb-3'>Date</h3>
                        <input required
                            value={taskDate}
                            onChange={(e) => setTaskDate(e.target.value)}
                            className='text-sm sm:text-base md:text-lg py-2 sm:py-3 md:py-4 px-3 sm:px-4 md:px-5 w-full rounded-lg sm:rounded-xl outline-none bg-indigo-50 border border-indigo-300 shadow-md placeholder:text-indigo-500 focus:ring-2 focus:ring-indigo-500 transition duration-300 ease-in-out' type="date" />
                    </div>
                    <div>
                        <h3 className='text-base sm:text-lg md:text-xl text-indigo-900 font-bold mb-2 sm:mb-3'>Assign to</h3>
                        <input required
                            value={assignTo}
                            onChange={(e) => setassignTo(e.target.value)}
                            className='text-sm sm:text-base md:text-lg py-2 sm:py-3 md:py-4 px-3 sm:px-4 md:px-5 w-full rounded-lg sm:rounded-xl outline-none bg-indigo-50 border border-indigo-300 shadow-md placeholder:text-indigo-500 focus:ring-2 focus:ring-indigo-500 transition duration-300 ease-in-out' type="text" placeholder='Employee Name' />
                    </div>
                    <div>
                        <h3 className='text-base sm:text-lg md:text-xl text-indigo-900 font-bold mb-2 sm:mb-3'>Category</h3>
                        <input required
                            value={category}
                            onChange={(e) => setcategory(e.target.value)}
                            className='text-sm sm:text-base md:text-lg py-2 sm:py-3 md:py-4 px-3 sm:px-4 md:px-5 w-full rounded-lg sm:rounded-xl outline-none bg-indigo-50 border border-indigo-300 shadow-md placeholder:text-indigo-500 focus:ring-2 focus:ring-indigo-500 transition duration-300 ease-in-out' type="text" placeholder='Design, Dev, etc.' />
                    </div>
                </div>

                <div className='w-full lg:w-2/5 flex flex-col items-start space-y-4 sm:space-y-6'>
                    <h3 className='text-base sm:text-lg md:text-xl text-indigo-900 font-bold mb-2 sm:mb-3'>Description</h3>
                    <textarea required
                        value={taskDescription}
                        onChange={(e) => setTaskDescription(e.target.value)}
                        className='w-full h-32 sm:h-40 md:h-52 text-sm sm:text-base md:text-lg py-2 sm:py-3 md:py-4 px-3 sm:px-4 md:px-6 rounded-lg sm:rounded-xl outline-none bg-indigo-50 border border-indigo-300 shadow-md placeholder:text-indigo-500 focus:ring-2 focus:ring-indigo-500 transition duration-300 ease-in-out resize-none' name="" id="" cols="30" rows="10" placeholder='Enter The Description...'></textarea>
                    <button className='text-white font-medium bg-indigo-600 py-2 sm:py-3 hover:bg-indigo-700 px-4 sm:px-6 md:px-8 rounded-lg sm:rounded-xl text-base sm:text-lg md:text-xl w-full shadow-xl transition duration-300 ease-in-out transform hover:-translate-y-1'>
                        Create Task
                    </button>
                </div>
            </form>
        </div>
    )
}

export default CreateTask