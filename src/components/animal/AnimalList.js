import React, { useContext, useEffect } from "react"
import { AnimalContext } from "./AnimalProvider"
import { Animal } from "./Animal"


export const AnimalList = () => {
    const { animals, getAnimals } = useContext(AnimalContext)

    useEffect( () => {
      console.log("getting animals")
      getAnimals()
    }, [] )


    useEffect( () => {
      console.log(animals)
    }, [animals])


    return (
        <div className="animals">
        {
            animals.map(a => <Animal key={a.id} animal={a} />)
        }
        </div>
    )
}