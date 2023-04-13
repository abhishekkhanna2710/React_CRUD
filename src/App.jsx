import React from "react"
import Employee from "./Pages/Employee_Details/Employee"
import Data from "./Pages/Employee_Data/Data"
import Navbar from "./Components/Navbar/Navbar"
import { Routes, Route } from "react-router-dom"

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Employee />} />
        <Route path="/data" element={<   Data />} />
      </Routes>




    </div>
  )
}

export default App
