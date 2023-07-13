import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { ServicioProvider } from './context/ServicioProvider'
import router from './router'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ServicioProvider>
      <RouterProvider router={router}/>
    </ServicioProvider>
  </React.StrictMode>,
)
