import React from 'react'
import Header from '../other/Header'
import TaskListNum from '../other/TaskListNum'
import TaskList from '../TaskLists/TaskList'

const EmpDashboard = (props) => {
    return (
        <div className="p-4 sm:p-6 md:p-8 lg:p-10 min-h-screen bg-gradient-to-r from-indigo-100 via-purple-100 to-pink-100 text-gray-900">
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