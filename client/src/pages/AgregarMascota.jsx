import { useState } from 'react'
import axios from 'axios';
import '../App.css'
import { useForm } from '../hooks/useForm';
import { Link } from 'react-router-dom';
let boton = '';
function AgregarMascota() {
  const { formState, onInputChange, onResetForm, name, type, description, skill1, skill2, skill3 } = useForm({
    name: '',
    type: '',
    description: '',
    skill1: '',
    skill2: '',
    skill3: '',
  })

  const handleClassName = () => {
    boton = ''
    boton = "animating"
  }


  console.log(formState)

  function handleSubmit(event) {
    event.preventDefault();

    const mascota = { name, type, description, skill1, skill2, skill3 };

    axios.post('http://127.0.0.1:9000/api/pets/new', mascota)
      .then(response => console.log(response.data))
      .catch(error => console.error(error));
    onResetForm()
  }


  return (
    <>
      <div className="details-container">
        <div className="details-info">
          <h3>Pet Shelter</h3>
          <p>Know a pet needing a home?</p>
        </div>
        <div>
          <Link className='link-Home' to={'/'}>back to home</Link>
        </div>
      </div>
  
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Pet Name:</label>
          <input type="text"
            placeholder="Garfield"
            name="name"
            value={name}
            minLength={3}
            onChange={onInputChange}
          />



          <label htmlFor="type">Pet Type:</label>
          <input type="text"
            placeholder="Cat"
            name="type"
            value={type}
            minLength={3}
            onChange={onInputChange}
          />



          <label htmlFor="description">Pet Description:</label>
          <input type="text"
            placeholder="Description"
            name="description"
            value={description}
            minLength={3}
            onChange={onInputChange}
          />



          <button className={`btn ${boton}`} onClick={handleClassName}><img className={`img ${boton !== '' ? 'esconderse' : ''}`} src={'https://cdn-icons-png.flaticon.com/512/5305/5305380.png'}></img> Add Pet</button>
          <div className="checkmark-container">
            <svg x="0px" y="0px" fill="none" className="checkmark-svg" viewBox="0 0 25 30">
              <path d="M2,19.2C5.9,23.6,9.4,28,9.4,28L23,2" />
            </svg>
          </div>
        </div>

        <div>
          <label htmlFor="title">Skills(optional):</label>
          <label htmlFor="skill1">Skill 1</label>
          <input type="text"
            placeholder="skill1"
            name="skill1"
            value={skill1}
            onChange={onInputChange}
          />

          <label htmlFor="skill2">Skill 2</label>
          <input type="text"
            placeholder="skill2"
            name="skill2"
            value={skill2}
            onChange={onInputChange}
          />

          <label htmlFor="skill3">Skill 3</label>
          <input type="text"
            placeholder="skill3"
            name="skill3"
            value={skill3}
            onChange={onInputChange}
          />
        </div>

      </form>
    </>
  );
}

export default AgregarMascota
