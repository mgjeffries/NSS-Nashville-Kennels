import React from "react"
import "./Employee.css"

export const Employee = ({employee, location}) => (
  <section className="employee">
    <h3 className="employee_name">{employee.name}</h3>
    <div className="employee_key">Employee Number: {employee.id}</div>
    <div className="employee_key">Location: {location.name}</div>
  </section>
)