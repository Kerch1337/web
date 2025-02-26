import React from 'react'
import { createContext } from 'react'
import { AsteroidsContextProvider } from './components/asteroids-context/AsteroidsContext'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
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
])

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <React.StrictMode>
        <AsteroidsContextProvider>
            <RouterProvider router={router} />
        </AsteroidsContextProvider>
    </React.StrictMode>
)
