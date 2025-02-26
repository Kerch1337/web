import React from 'react'
import { AsteroidsContextProvider } from './components/asteroids-context/AsteroidsContext'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom'
import { Asteroids } from './pages/Asteroids'
import { Destroyment } from './pages/Destroyment'
import { Asteroid } from './pages/Asteroid'

const meta = document.createElement('meta')
meta.setAttribute('charset', 'UTF-8')
document.head.appendChild(meta)

const router = createBrowserRouter([
    {
        path: '/asteroids',
        element: <Asteroids />,
    },
    {
        path: '/destroyment',
        element: <Destroyment />,
    },
    {
        path: '/asteroid/:id',
        element: <Asteroid />,
    },
    {
        path: '*',
        element: <Navigate to="/asteroids" replace />,
    },
])

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <React.StrictMode>
        <AsteroidsContextProvider>
            <RouterProvider router={router} />
        </AsteroidsContextProvider>
    </React.StrictMode>
)
