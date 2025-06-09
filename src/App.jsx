import React, { useEffect } from 'react'
import Login from './components/Auth/Login'
import EmpDashboard from './components/Dashboard/EmpDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { getLocalStorage, setLocalStorage } from './utils/LocalStorage'
import { useState } from 'react'

const App = () => {

  const [user, setUser] = useState(null)

  const handleLogin = (email, password) => {
    if (email === "admin@me.com" && password === "123") {
      setUser("admin");
      console.log(user)
    } else if (email === "user@me.com" && password === "123") {
      setUser("employee");
      console.log(user)
    }
    else {
      alert("Invalid credentials, please try again.");
    }
  }


  return (
    <>
      {!user ? <Login handleLogin={handleLogin} /> : ""}
      {user === "admin" ? <AdminDashboard /> : <EmpDashboard />}
    </>
  )
}

export default App