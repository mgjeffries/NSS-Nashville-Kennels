import React from "react"
import "./Kennel.css"
import { Animal } from "./animal/Animal"
import { LocationProvider } from "./Location/LocationProvider"
import { LocationList } from "./Location/LocationList"
import { CustomerProvider } from "./Customer/CustomerProvider"
import { CustomerList } from "./Customer/CustomerList"
import { EmployeeProvider } from "./Employee/EmployeeProvider"
import { EmployeeList } from "./Employee/EmployeeList"

export const Kennel = () => (
    <>
        <h2>Nashville Kennels</h2>
        <small>Loving care when you're not there.</small>
        <address>
            <div>Visit Us at the Nashville North Location</div>
            <div>500 Puppy Way</div>
        </address>

        <h2>Animals</h2>
        <article className="animals">
          <Animal />
          <Animal />
          <Animal />
        </article>

        <h2>Locations</h2>
        <LocationProvider>
          <LocationList />
        </LocationProvider>

        <h2>Customers</h2>
        <CustomerProvider>
          <CustomerList />
        </CustomerProvider>

        <h2>Employees</h2>
          <EmployeeProvider>
            <EmployeeList />
          </EmployeeProvider>
    </>
)