import React, { useContext, useRef, useEffect } from "react"
import { LocationContext } from "../location/LocationProvider"
import { AnimalContext } from "../animal/AnimalProvider"

export const AnimalForm = (props) => {
    const { locations, getLocations } = useContext(LocationContext)
    const { animals, getAnimals, addAnimal } = useContext(AnimalContext)

    const name = useRef(null)
    const location = useRef(null)
    const animal = useRef(null)

    useEffect(() => {
       getAnimals().then(getLocations)
    }, [])

    const constructNewAnimal = () => {
        const locationId = parseInt(location.current.value)
        const animalId = parseInt(animal.current.value)

        if (locationId === 0) {
            window.alert("Please select a location")
        } else {
            addAnimal({
                name: name.current.value,
                locationId,
                animalId
            })
            .then(() => props.history.push("/animals"))
        }
    }

    return (
        <form className="animalForm">
            <h2 className="animalForm__title">New animal</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="animalName">animal name: </label>
                    <input type="text" id="animalName" ref={name} required autoFocus className="form-control" placeholder="animal name" />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="location">Assign to location: </label>
                    <select defaultValue="" name="location" ref={location} id="animalLocation" className="form-control" >
                        <option value="0">Select a location</option>
                        {locations.map(e => (
                            <option key={e.id} value={e.id}>
                                {e.name}
                            </option>
                        ))}
                    </select>
                </div>
            </fieldset>                
            <button type="submit"
                onClick={evt => {
                    evt.preventDefault() // Prevent browser from submitting the form
                    constructNewAnimal()
                }}
                className="btn btn-primary">
                Save Animal
            </button>
        </form>
    )
}