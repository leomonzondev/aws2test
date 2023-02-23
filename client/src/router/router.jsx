import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import AgregarMascota from '../pages/AgregarMascota'
import { DetallesMascota } from '../pages/DetallesMascota'
import ModificarMascota from '../pages/ModificarMascota'
import { MostrarMascotas } from '../pages/MostrarMascotas'



export const router = createBrowserRouter([
    {
        path: '/',
        element: <MostrarMascotas/>
    },
    {
        path: '/pets/new',
        element: <AgregarMascota/>
    },
    {
        path: '/pets/:id',
        element: <DetallesMascota/>
    },
    {
        path: '/pets/:id/edit',
        element: <ModificarMascota/>
    },
    
])
