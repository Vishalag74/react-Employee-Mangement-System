import React from 'react'
import Header from '../other/Header'
import TaskListNum from '../other/TaskListNum'
import TaskList from '../TaskLists/TaskList'

const EmpDashboard = (props) => {
    return (
<div className="p-10 h-screen bg-gradient-to-r from-indigo-100 via-purple-100 to-pink-100 text-gray-900">
            <Header changeUser={props.changeUser} data={props.data} />
            {props.data && (
                <>
                    <TaskListNum data={props.data} />
                    <TaskList data={props.data} />
                </>
            )}
        </div>
    )
}

export default EmpDashboard