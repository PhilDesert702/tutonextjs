"use client"
import { useEffect, useState } from 'react'
//un useState est une variable une boite qui permet de garder quelque chose d'important dans ton application

const jeu = () => {

    const [number, setNumber] = useState(0)

    const increment = () => {
        setNumber(number + 1)
    }

    const decrement = () => {
        setNumber(number - 1)
    }

    useEffect(() => {
        console.log('La page vient de charger')
    }, [number])

    return ( // dans le "return" il faut un parent unique
        <>
            <div>{number}</div>
            <button onClick={() => increment()}>Increment</button>
            <button onClick={() => decrement()}>Decrement</button>
        </>
    )
}

export default jeu