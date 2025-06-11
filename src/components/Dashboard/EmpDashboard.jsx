import React from 'react'
import Header from '../other/Header'
import TaskListNum from '../other/TaskListNum'
import TaskList from '../TaskLists/TaskList'

const EmpDashboard = (props) => {
    return (
        <div className='p-10 h-screen bg-[#1C1C1C]'>
            <Header changeUser={props.changeUser} data={props.data} />
            <TaskListNum data={props.data} />
            <TaskList data={props.data} />
        </div>
    )
}

export default EmpDashboard