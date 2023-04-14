import React from "react"
import Employee from "./Pages/Employee_Details/Employee"
import Data from "./Pages/Employee_Data/Data"
import { Routes, Route } from "react-router-dom"
import Edit from "./Pages/Edit/Edit"

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Employee />} />
        <Route path="/Employee_Data" element={<Data />} />
        <Route path="/edit/:id" element={<Edit />} />
      </Routes>




    </div>
  )
}

export default App
