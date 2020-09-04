import React, { useContext, useEffect } from "react"
import { Employee } from "./Employee"
import { EmployeeContext } from "./EmployeeProvider"
import { LocationContext } from "../Location/LocationProvider"


export const EmployeeList = (props) => {
  const { employees, getEmployees } = useContext(EmployeeContext)
  const { locations, getLocations } = useContext(LocationContext)

  useEffect(() => {
    getEmployees()
    getLocations()
  }, [])

  return (
    <div className="employees">
      <h1>Employees</h1>
       <button onClick={() => props.history.push("/employees/create")}>
        Add Employee
      </button> 
      <article className="employeeList"> 
        {
          employees.map(e =>{
            const location = locations.find(l => l.id === e.locationId) || {}
            return <Employee key={e.id} employee={e} location={location}/>
          })
        }
      </article>
    </div>
  )
}