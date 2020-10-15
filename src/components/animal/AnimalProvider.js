import React, { useState } from "react"

export const AnimalContext = React.createContext()


export const AnimalProvider = (props) => {
    const [animals, setAnimals] = useState([])
    const [ searchTerms, setSearch ] = useState("")

    const getAnimals = () => {
        return fetch("http://localhost:8088/animals")
            .then(res => res.json())
            .then(setAnimals)
    }

    const getAnimalById = (id) => {
        // Note: the python database expands the animals by customer and Id by default
        return fetch(`http://localhost:8088/animals/${ id }`)
            .then(res => res.json())
    }

    const releaseAnimal = (animal) => {
        return fetch(`http://localhost:8088/animals/${ animal.id }`, {
            method: "DELETE"
        })
    }

    const addAnimal = animal => {
        return fetch("http://localhost:8088/animals", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(animal)
        })
            .then(getAnimals)
    }

    const updateAnimal = animal => {
        return fetch(`http://localhost:8088/animals/${animal.id}`, {
            method: "Put",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(animal)
        })
            .then(getAnimals)
    }


    return (
        <AnimalContext.Provider value={{
            animals, searchTerms, setSearch, updateAnimal ,addAnimal, getAnimals, getAnimalById, releaseAnimal
        }}>
            {props.children}
        </AnimalContext.Provider>
    )
}