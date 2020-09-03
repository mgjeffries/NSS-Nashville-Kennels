import React, { useContext, useEffect } from "react"
import { Employee } from "./Employee"
import { EmployeeContext } from "./EmployeeProvider"


export const EmployeeList = () => {
  const { employees, getEmployees } = useContext(EmployeeContext)

  useEffect(() => {
    getEmployees()
  }, [])

  return (
    <div className="employees">
      {
        employees.map(e => <Employee key={e.id} employee={e} />)
      }
    </div>
  )
}