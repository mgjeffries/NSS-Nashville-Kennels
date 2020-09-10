import React, { useContext, useEffect, useState } from "react"
import { AnimalContext } from "./AnimalProvider"
import { Animal } from "./Animal"
import { LocationContext } from "../Location/LocationProvider"
import { CustomerContext } from "../Customer/CustomerProvider"


export const AnimalList = (props) => {
    const { animals, searchTerms, getAnimals } = useContext(AnimalContext)
    const { locations, getLocations } = useContext(LocationContext)
    const { customers, getCustomers } = useContext(CustomerContext)

    const [ filteredAnimals, setFiltered ] = useState([])

    useEffect( () => {
      console.log("getting animal data")
      getAnimals()
      getCustomers()
      getLocations()
    }, [] )


    useEffect(() => {
        if (searchTerms !== "") {
            // If the search field is not blank, display matching animals
            const subset = animals.filter(animal => animal.name.toLowerCase().includes(searchTerms))
            setFiltered(subset)
        } else {
            // If the search field is blank, display all animals
            setFiltered(animals)
        }
    }, [searchTerms, animals])


    return (
      <>
        <div className='animal-appointment'>
          <button type="submit"
              onClick={evt => {
                  evt.preventDefault() // Prevent browser from submitting the form
                  props.history.push("./animals/create")
              }}
              className="btn btn-primary">
              Make Appointment
          </button>
        </div>
        <div className="animals">

        {
            filteredAnimals.map(a =>{
              const owner = customers.find(c => c.id === a.customerId) || {}
              const location = locations.find(l => l.id === a.locationId) || {}

              return <Animal key={a.id} 
              customer={owner}
              location={location}
              animal={a} />
            })
        }
        </div>
      </>
    )
}