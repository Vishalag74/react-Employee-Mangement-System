import React from 'react'
import Header from '../other/Header'
import CreateTask from '../other/CreateTask'
import AllTask from '../other/AllTask'

const AdminDashboard = (props) => {
    return (
        <div className="w-full h-auto md:h-screen p-4 md:p-10 bg-gradient-to-r from-indigo-100 via-purple-100 to-pink-100 text-gray-900 flex flex-col">
            <Header changeUser={props.changeUser} />
            <div className="flex flex-col md:flex-row gap-6 md:gap-10 mt-6 h-full">
                <div className="flex-1 max-w-full md:max-w-xl overflow-auto">
                    <CreateTask />
                </div>
                <div className="flex-1 max-w-full md:max-w-3xl overflow-auto">
                    <AllTask />
                </div>
            </div>
        </div>
    )
}

export default AdminDashboard
