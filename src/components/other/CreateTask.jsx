import React, { useContext, useState } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const CreateTask = ({ onTaskCreated }) => {

    const [userData, setuserData] = useContext(AuthContext)

    const [taskTitle, setTaskTitle] = useState('')
    const [taskDescription, setTaskDescription] = useState('')
    const [taskDate, setTaskDate] = useState('')
    const [assignTo, setassignTo] = useState('')
    const [category, setcategory] = useState('')

    // const [newTask, setnewTask] = useState([])

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
        <div className='p-5 bg-white bg-opacity-90 backdrop-blur-md rounded-3xl shadow-xl mt-8 max-w-4xl mx-auto'>
            <form onSubmit={(e) => {
                submitHandler(e);
            }}
                className='flex flex-wrap w-full items-start justify-between gap-10'>
                <div className='w-1/2 space-y-8'>
                    <div>
                        <h3 className='text-lg text-indigo-900 font-bold mb-3'>Task Title</h3>
                        <input
                            value={taskTitle}
                            onChange={(e) => setTaskTitle(e.target.value)}
                            className='text-lg py-4 px-5 w-full rounded-xl outline-none bg-indigo-50 border border-indigo-300 shadow-md placeholder: text-indigo-500 focus:ring-2 focus:ring-indigo-500 transition duration-300 ease-in-out' type="text" placeholder='Enter Task Title' />
                    </div>
                    <div>
                        <h3 className='text-lg text-indigo-900 font-bold mb-3'>Date</h3>
                        <input
                            value={taskDate}
                            onChange={(e) => setTaskDate(e.target.value)}
                            className='text-lg py-4 px-5 w-full rounded-xl outline-none bg-indigo-50 border border-indigo-300 shadow-md placeholder: text-indigo-500 focus:ring-2 focus:ring-indigo-500 transition duration-300 ease-in-out' type="date" />
                    </div>
                    <div>
                        <h3 className='text-lg text-indigo-900 font-bold mb-3'>Assign to</h3>
                        <input
                            value={assignTo}
                            onChange={(e) => setassignTo(e.target.value)}
                            className='text-lg py-4 px-5 w-full rounded-xl outline-none bg-indigo-50 border border-indigo-300 shadow-md placeholder: text-indigo-500 focus:ring-2 focus:ring-indigo-500 transition duration-300 ease-in-out' type="text" placeholder='Employee Name' />
                    </div>
                    <div>
                        <h3 className='text-lg text-indigo-900 font-bold mb-3'>Category</h3>
                        <input
                            value={category}
                            onChange={(e) => setcategory(e.target.value)}
                            className='text-lg py-4 px-5 w-full rounded-xl outline-none bg-indigo-50 border border-indigo-300 shadow-md placeholder: text-indigo-500 focus:ring-2 focus:ring-indigo-500 transition duration-300 ease-in-out' type="text" placeholder='Design, Dev, etc.' />
                    </div>
                </div>

                <div className='w-2/5 flex flex-col items-start space-y-6'>
                    <h3 className='text-lg text-indigo-900 font-bold mb-3'>Description</h3>
                    <textarea
                        value={taskDescription}
                        onChange={(e) => setTaskDescription(e.target.value)}
                        className='w-full h-52 text-lg py-4 px-6 rounded-xl outline-none bg-indigo-50 border border-indigo-300 shadow-md placeholder: text-indigo-500 focus:ring-2 focus:ring-indigo-500 transition duration-300 ease-in-out resize-none' name="" id="" cols="30" rows="10" placeholder='Enter The Description...'></textarea>
                    <button className=' text-white font-medium bg-indigo-600 py-3 hover:bg-indigo-700 px-8 rounded-xl text-lg w-full shadow-xl transition duration-300 ease-in-out transform hover:-translate-y-1'>
                        Create Task
                    </button>
                </div>
            </form>
        </div>
    )
}

export default CreateTask