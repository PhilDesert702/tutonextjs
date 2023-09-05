"use client"
import { useState, useEffect } from 'react'
import axios from "axios"
//https://dumbstockapi.com/stock?exchanges=NYSE

const page = () => {

    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchData = async () => { // fetch: aller chercher..
            try {
                const response = await axios.get('https://dumbstockapi.com/stock?exchanges=NYSE')
                setData(response.data)
                setLoading(false)
            } catch (error) {
                console.log(error)
                setLoading(false)
            }

        }

        fetchData()

        return () => {
            // NETTOYAGE AU DEMONTAGE DU COMPOSANT
            // cancelRequest()
        }
    }, [])

    return (
        <div>
            {loading ? (
                <p>Chargement...</p>
            ) : (
                <ul>
                    {data &&
                        data.map(item => (
                            <li key={item.ticker}>{item.name}</li>
                        ))
                    }
                </ul>
            )}
        </div>
    )

}


{/* <div>page</div> */ }

{/* <p>Chargement...</p>
            ) : (
                <p>j'ai bien recupere les donnees !</p>
            )} */}