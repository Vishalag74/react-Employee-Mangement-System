import React from 'react'
import Header from '../other/Header'
import TaskListNum from '../other/TaskListNum'
import TaskList from '../TaskLists/TaskList'

const EmpDashboard = ({ data }) => {
    return (
        <div className='p-10 h-screen bg-[#1C1C1C]'>
            <Header data={data} />
            <TaskListNum data={data} />
            <TaskList data={data} />
        </div>
    )
}

export default EmpDashboard