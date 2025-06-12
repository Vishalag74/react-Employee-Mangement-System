import React from 'react'
import AcceptTask from './AcceptTask'
import NewTask from './NewTask'
import CompleteTask from './CompleteTask'
import FailedTask from './FailedTask'

const TaskList = ({ data }) => {
    return (
        <div id='tasklist' className='overflow-x-auto flex items-center justify-start gap-5 flex-nowrap h-[55%] w-full py-5 mt-10'>
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
    )
}

export default TaskList