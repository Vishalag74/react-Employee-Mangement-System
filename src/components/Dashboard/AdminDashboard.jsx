import React from 'react'
import Header from '../other/Header'
import CreateTask from '../other/CreateTask'
import AllTask from '../other/AllTask'

const AdminDashboard = (props) => {
    return (
        <div className="w-full min-h-screen p-4 sm:p-6 md:p-8 lg:p-10 bg-gradient-to-r from-indigo-100 via-purple-100 to-pink-100 text-gray-900 flex flex-col">
            <Header changeUser={props.changeUser} />
            <div className="flex flex-col lg:flex-row gap-4 sm:gap-6 md:gap-8 lg:gap-10 mt-4 sm:mt-6 md:mt-8 h-full">
                <div className="flex-1 max-w-full lg:max-w-xl overflow-auto">
                    <CreateTask />
                </div>
                <div className="flex-1 max-w-full lg:max-w-3xl overflow-auto">
                    <AllTask />
                </div>
            </div>
        </div>
    )
}

export default AdminDashboard
