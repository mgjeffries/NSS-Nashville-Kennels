import React, { useContext, useEffect } from "react"
import { AnimalContext } from "./AnimalProvider"
import { Animal } from "./Animal"
import { LocationContext } from "../Location/LocationProvider"
import { CustomerContext } from "../Customer/CustomerProvider"


export const AnimalList = (props) => {
    const { animals, getAnimals } = useContext(AnimalContext)
    const { locations, getLocations } = useContext(LocationContext)
    const { customers, getCustomers } = useContext(CustomerContext)

    useEffect( () => {
      console.log("getting animal data")
      getAnimals()
      getCustomers()
      getLocations()
    }, [] )


    useEffect( () => {
      console.log(animals)
    }, [animals])


    return (
        <div className="animals">
        <button type="submit"
                onClick={evt => {
                    evt.preventDefault() // Prevent browser from submitting the form
                    props.history.push("./animals/create")
                }}
                className="btn btn-primary">
                Make Appointment
            </button>

        {
            animals.map(a =>{
              const owner = customers.find(c => c.id === a.customerId) || {}
              const location = locations.find(l => l.id === a.locationId) || {}

              return <Animal key={a.id} 
              customer={owner}
              location={location}
              animal={a} />
            })
        }
        </div>
    )
}