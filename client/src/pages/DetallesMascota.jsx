import { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router'
import '../styles/DetallesMascota.css'
import { Link } from 'react-router-dom'


export const DetallesMascota = () => {
    const { id } = useParams()
    const [likes, setLikes] = useState(null)
    const [mascota, setMascota] = useState(null)

    const getAxios = () => {
        axios.get(`http://127.0.0.1:9000/api/getIdMascota/${id}`)
            .then(response => {
                setMascota(response.data.mascota);
                console.log(response.data.mascota)
            })
            .catch(error => {
                console.error(error);
            });
    }

    useEffect(() => {
        getAxios()
    }, []);

    const handleLikes = () => {
        const newLikes = (mascota.likes || 0) + 1;
        axios.put(`http://127.0.0.1:9000/api/pets/${id}`, { likes: (mascota.likes) + 1 })
            .then(response => {
                setLikes(newLikes);
                getAxios()
            })
            .catch(error => {
                console.error(error);
            });

    }
    const adoptarMascota = () => {
        axios.delete(`http://127.0.0.1:9000/api/delete/${id}`)
    }

    return (
        <>

            <div className="details-container">
                <div className="details-info">
                    <h3>Pet Shelter</h3>
                    <p>Details about: {mascota?.name}</p>
                </div>
                <div>
                    <Link className='link-Home' to={'/'}>back to home</Link>
                    <button className="button" onClick={adoptarMascota}><span className="icon"></span>Adopt {mascota?.name}
                    </button>
                </div>
            </div>

            <div>
                {mascota &&
                    <div className='detailsDiv'>
                        <p>Pet type: {mascota.name}</p>
                        <p>Description: {mascota.name}</p>
                        <p>Skills:</p>
                        <ul>
                            {mascota.skill1 === "" ? '' : <li>{mascota.skill1}</li>}
                            {mascota.skill2 === "" ? '' : <li>{mascota.skill2}</li>}
                            {mascota.skill3 === "" ? '' : <li>{mascota.skill3}</li>}
                        </ul>

                        <div className='divLikes'>
                            <button onClick={handleLikes} className='btn-like'><span className='icon'></span>Like {mascota?.name}</button>
                            <p>{mascota?.likes} likes(s)</p>
                        </div>
                    </div>

                }


            </div>
        </>

    )
}
