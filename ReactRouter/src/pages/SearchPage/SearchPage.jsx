import { useEffect, useState } from "react"
import "./SearchPage.css"


const SearchPage = () => {
    const [BreedsName, setBreedsName] = useState("")
    const [BreedsShow, setBreedsShow] = useState(undefined)
    const [breeds, setBreeds] = useState(undefined)
    const [error, setError] = useState(undefined)

    useEffect(() => {
        const handleBreeds = async (e) => {
        setError(undefined)
        try {
            const res = await fetch(`https://dog.ceo/api/breeds/list/all`)
            const data = await res.json()
            if (data.Response === "False"){
                throw new Error(data.Error)
            }
            setBreeds(data)
            console.log(data);
        } catch(err) {
            setError(err.message)
            console.error(err)
        }
    }
    handleBreeds()
    },[])

    useEffect(() => {
        breeds && console.log(Object.keys(breeds.message))
        breeds && setBreedsShow(Object.keys(breeds.message).filter((breed) => breed.toLowerCase().includes(BreedsName.toLowerCase())))
    }, [breeds, BreedsName])

    
    return(
        <>
        <h1>Поиск</h1>
                <input
                    value={BreedsName}
                    onChange={(e) => setBreedsName(e.target.value)}
                    type="text" />
        {BreedsShow && (
                <div className="breeds-all">
                    {BreedsShow.map((entry) => (
                      <div className="entry">
                        <span><b>{entry}</b></span>
                      </div> 
                    ))
                }
                </div>
            )}
        </>
    )
}
    export default SearchPage