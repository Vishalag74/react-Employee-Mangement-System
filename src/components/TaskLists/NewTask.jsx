import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const NewTask = ({ data }) => {
    const [userData, setuserData] = useContext(AuthContext)

    const acceptTask = () => {
        const updatedUserData = userData.map(user => {
            const updatedTasks = user.tasks.map(task => {
                if (task.taskTitle === data.taskTitle && task.taskDate === data.taskDate) {
                    return {
                        ...task,
                        active: true,
                        newTask: false
                    }
                }
                return task
            })

            // Recalculate taskCounts based on updatedTasks
            const newTaskCount = updatedTasks.filter(t => t.newTask).length
            const activeCount = updatedTasks.filter(t => t.active).length
            const completedCount = updatedTasks.filter(t => t.completed).length
            const failedCount = updatedTasks.filter(t => t.failed).length

            return {
                ...user,
                tasks: updatedTasks,
                taskCounts: {
                    newTask: newTaskCount,
                    active: activeCount,
                    completed: completedCount,
                    failed: failedCount
                }
            }
        })
        setuserData(updatedUserData)
    }

    return (
        <div className='w-full h-auto p-3 sm:p-4 md:p-5 bg-green-200 rounded-xl sm:rounded-2xl shadow-md'>
            <div className='flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2'>
                <h3 className='bg-red-200 text-xs sm:text-sm px-2 sm:px-3 py-1 rounded text-red-700 w-fit'>{data.category}</h3>
                <h4 className='text-xs sm:text-sm text-gray-700'>{data.taskDate}</h4>
            </div>
            <h2 className='text-lg sm:text-xl md:text-2xl font-semibold mt-3 sm:mt-4 md:mt-5 text-gray-900'>{data.taskTitle}</h2>
            <p className='text-xs sm:text-sm mt-2 text-gray-700 line-clamp-3 sm:line-clamp-4'>{data.taskDescription}</p>
            <div className='mt-3 sm:mt-4'>
                <button onClick={acceptTask} className='w-full sm:w-auto bg-indigo-500 hover:bg-indigo-600 py-2 px-3 text-xs sm:text-sm text-white rounded-md shadow-sm transition'>Accept Task</button>
            </div>
        </div>
    )
}

export default NewTask