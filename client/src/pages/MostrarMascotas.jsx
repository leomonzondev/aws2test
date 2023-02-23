import { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';
import '../styles/MostrarMascota.css'


export const MostrarMascotas = () => {
  const [mascotas, setMascotas] = useState(null)

  useEffect(() => {
    axios.get('http://127.0.0.1:9000/api/allGetMascotas')
      .then(response => {
        setMascotas(response.data.mascota.sort((a, b) => a.type.localeCompare(b.type)));
        // para ordenar las mascotas
      })
      .catch(error => {
        console.error(error);
      });
  }, []);
  return (
    <>
      <div className="details-container">
        <div className="details-info">
          <h3>Pet Shelter</h3>
          <p>These pets are looking for a good home</p>
        </div>
        <div>
          <Link className='link-Home' to={'/pets/new'}>add a pet to the shelter</Link>
        </div>
      </div>
  
      
      {mascotas ? (
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Type</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {mascotas.map(mascota => (
              <tr key={mascota._id}>
                <td>{mascota.name}</td>
                <td>{mascota.type}</td>
                <td>
                  <Link to={`/pets/${mascota._id}`}>Detalles </Link>
                  |
                  <Link to={`/pets/${mascota._id}/edit`}>Editar</Link>
                </td>

              </tr>
            ))}
          </tbody>
        </table>
      ) : (<p>Cargando datos</p>)}
    </>

  )
}
