import React, { useContext, useEffect, useState } from 'react'
import Login from './components/Auth/Login'
import EmpDashboard from './components/Dashboard/EmpDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { AuthContext } from './context/AuthProvider'

const App = () => {

  const [user, setUser] = useState(null)
  const [loggedInUserData, setLoggedInUserData] = useState(null)
  const [userData,setuserData] = useContext(AuthContext)

  useEffect(() => {
    const loggedInUser = localStorage.getItem("loggedInUser");
    if (loggedInUser) {
      const userData = JSON.parse(loggedInUser);
      setUser(userData.role);
      setLoggedInUserData(userData.dat);
    }
  }, []);

  useEffect(() => {
    if (user === "employee" && userData && loggedInUserData) {
      const updatedUser = userData.find(u => u.email === loggedInUserData.email);
      if (updatedUser) {
        setLoggedInUserData(updatedUser);
      }
    }
  }, [userData, user, loggedInUserData]);



const handleLogin = (email, password) => {
  if (email === "admin@me.com" && password === "123") {
    setUser("admin");
    localStorage.setItem("loggedInUser", JSON.stringify({ role: "admin" }));
  }
  else if (userData) {
    const employee = userData.find((e) => e.email === email && e.password === password)
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
    {user === "admin" ? <AdminDashboard changeUser={setUser} /> : (user === "employee" ? <EmpDashboard data={loggedInUserData} changeUser={setUser} /> : null)}
  </>
)
}

export default App