import React from 'react'
import ReactDOM from 'react-dom/client'
import { HelmetProvider } from 'react-helmet-async'
import { RouterProvider } from 'react-router-dom'
import './index.css'
import router from './routes/router.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <HelmetProvider>
   <div className='max-w-6xl mx-auto'>
   <RouterProvider router={router}/>
   </div>
   </HelmetProvider>
  </React.StrictMode>,
)
