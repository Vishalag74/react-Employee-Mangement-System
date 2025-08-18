import React from 'react'
import AcceptTask from './AcceptTask'
import NewTask from './NewTask'
import CompleteTask from './CompleteTask'
import FailedTask from './FailedTask'

const TaskList = ({ data }) => {
    return (
        <div className='mt-6 sm:mt-8 md:mt-10 w-full'>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4 md:gap-5 lg:gap-6'>
                {data.tasks.map((elem, idx) => {
                    if (elem.newTask) {
                        return <NewTask key={elem.taskTitle + elem.taskDate} data={elem} />
                    }
                    if (elem.active) {
                        return <AcceptTask key={elem.taskTitle + elem.taskDate} data={elem} />
                    }
                    if (elem.completed) {
                        return <CompleteTask key={elem.taskTitle + elem.taskDate} data={elem} />
                    }
                    if (elem.failed) {
                        return <FailedTask key={elem.taskTitle + elem.taskDate} data={elem} />
                    }
                })}
            </div>
        </div>
    )
}

export default TaskList