import { useEffect, useState } from "react"
import { useParams } from "react-router"
import "./Dogimages.css"

const Dogimages = () => {
    const {breeds} = useParams()
    const [breed, setBreed] = useState(undefined)
    
    useEffect(() => {
        const handleLoad = async () =>{
            try{
                const res = await fetch(`https://dog.ceo/api/breed/${breeds}/images`)
                const data = await res.json()
                setBreed(data)
                console.log(data);
                
            } catch (error){
                console.error(error)
            }
        }
        handleLoad()
    },[breeds]) 

  useEffect(() => {
        if (breed) {
            const images = document.querySelectorAll('.dog-img');
            images.forEach(img => {
                img.addEventListener('load', () => {
                    // После загрузки изображения добавляем стили
                    img.style.transform = 'scale(1)';
                });
            });
        }
    }, [breed]);

 return (
        <> 
        <h1>{breeds}</h1>
            {breed && (
                <div className="breed-image">
                    {breed.message.map((entry, index) => (
                       <img 
                         key={index} 
                         src={entry} 
                         className="dog-img"
                         alt={`${breeds} dog ${index + 1}`}
                         loading="lazy"
                       />
                    ))}
                </div>
            )}
        </>
    )
}

export default Dogimages