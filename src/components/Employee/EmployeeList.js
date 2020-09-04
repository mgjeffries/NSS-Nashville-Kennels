import React, { useContext, useEffect } from "react"
import { Employee } from "./Employee"
import { EmployeeContext } from "./EmployeeProvider"
import { LocationContext } from "../Location/LocationProvider"


export const EmployeeList = () => {
  const { employees, getEmployees } = useContext(EmployeeContext)
  const { locations, getLocations } = useContext(LocationContext)

  useEffect(() => {
    getEmployees()
    getLocations()
  }, [])

  return (
    <div className="employees">
      {
        employees.map(e =>{
          const location = locations.find(l => l.id === e.locationId) || {}
          return <Employee key={e.id} employee={e} location={location}/>
        })
      }
    </div>
  )
}