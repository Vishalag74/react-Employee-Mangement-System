import React, { useContext, useEffect, useState } from 'react'
import Login from './components/Auth/Login'
import EmpDashboard from './components/Dashboard/EmpDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { AuthContext } from './context/AuthProvider'
import ForgetPassword from './components/Auth/ForgetPassword'

const App = () => {

  const [user, setUser] = useState(null)
  const [loggedInUserData, setLoggedInUserData] = useState(null)
  const [userData,setuserData] = useContext(AuthContext)

  // New state to track showing ForgetPassword page
  const [showForgetPassword, setShowForgetPassword] = useState(false);

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

// Function to show ForgetPassword page
const handleShowForgetPassword = () => {
  setShowForgetPassword(true);
}

// Function to go back to Login page
const handleBackToLogin = () => {
  setShowForgetPassword(false);
}

  const handleTaskCreated = (updatedUser) => {
    setLoggedInUserData(updatedUser);
  }

  return (
  <>
    {!user && !showForgetPassword ? <Login handleLogin={handleLogin} onForgetPasswordClick={handleShowForgetPassword} /> : ""}
    {!user && showForgetPassword ? <ForgetPassword onBackToLogin={handleBackToLogin} /> : ""}
    {user === "admin" ? <AdminDashboard changeUser={setUser} /> : (user === "employee" ? <EmpDashboard data={loggedInUserData} changeUser={setUser} onTaskCreated={handleTaskCreated} /> : null)}
  </>
)
}

export default App