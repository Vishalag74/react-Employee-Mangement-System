import React, { useContext, useEffect, useState } from 'react'
import Login from './components/Auth/Login'
import EmpDashboard from './components/Dashboard/EmpDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { AuthContext } from './context/AuthProvider'

const App = () => {

  const [user, setUser] = useState(null)
  const [loggedInUserData, setLoggedInUserData] = useState(null)
  const authData = useContext(AuthContext)

  useEffect(() => {
    const loggedInUser = localStorage.getItem("loggedInUser");
    if (loggedInUser) {
      const userData = JSON.parse(loggedInUser);
      setUser(userData.role);
      setLoggedInUserData(userData.dat);
    }
  })



  const handleLogin = (email, password) => {
    if (email === "admin@me.com" && password === "123") {
      setUser("admin");
      localStorage.setItem("loggedInUser", JSON.stringify({ role: "admin" }));
    }
    else if (authData) {
      const employee = authData.employees.find((e) => e.email === email && e.password === password)
      if (employee) {
        setUser("employee");
        setLoggedInUserData(employee);
        localStorage.setItem("loggedInUser", JSON.stringify({ role: "employee", dat: employee }));
      }
    }
    else {
      alert("Invalid credentials, please try again.");
    }
  }

  return (
    <>
      {!user ? <Login handleLogin={handleLogin} /> : ""}
      {user === "admin" ? <AdminDashboard /> : (user === "employee" ? <EmpDashboard data={loggedInUserData} /> : null)}
    </>
  )
}

export default App