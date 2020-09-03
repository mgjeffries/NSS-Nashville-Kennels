import React, { useContext, useEffect } from "react"
import { AnimalContext } from "./AnimalProvider"
import { Animal } from "./Animal"
import { LocationContext } from "../Location/LocationProvider"
import { CustomerContext } from "../Customer/CustomerProvider"


export const AnimalList = () => {
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