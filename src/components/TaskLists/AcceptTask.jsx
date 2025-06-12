import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const AcceptTask = ({data}) => {
    const [userData, setuserData] = useContext(AuthContext)

    const markCompleted = () => {
        const updatedUserData = userData.map(user => {
            const updatedTasks = user.tasks.map(task => {
                if (task.taskTitle === data.taskTitle && task.taskDate === data.taskDate) {
                    return {
                        ...task,
                        completed: true,
                        active: false,
                        newTask: false,
                        failed: false
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

    const markFailed = () => {
        const updatedUserData = userData.map(user => {
            const updatedTasks = user.tasks.map(task => {
                if (task.taskTitle === data.taskTitle && task.taskDate === data.taskDate) {
                    return {
                        ...task,
                        failed: true,
                        active: false,
                        newTask: false,
                        completed: false
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
<div className='flex-shrink-0 h-full w-[300px] p-5 bg-yellow-200 rounded-2xl shadow-md'>
    <div className='flex justify-between items-center'>
        <h3 className='bg-red-200 text-sm px-3 py-1 rounded text-red-700 '>{data.category}</h3>
        <h4 className='text-sm text-gray-700'>{data.taskDate}</h4>
    </div>
    <h2 className='text-2xl font-semibold mt-5 text-gray-900'>{data.taskTitle}</h2>
    <p className='text-sm mt-2 text-gray-700'>{data.taskDescription}</p>
    <div className='flex justify-between mt-5'>
        <button onClick={markCompleted} className='bg-indigo-500 hover:bg-indigo-600 py-1 px-2 text-sm text-white rounded-md shadow-sm transition'>Mark as Completed</button>
        <button onClick={markFailed} className='bg-red-500 hover:bg-red-600 py-1 px-2 text-sm text-white rounded-md shadow-sm transition'>Mark as Failed</button>
    </div>
</div>
    )
}

export default AcceptTask
