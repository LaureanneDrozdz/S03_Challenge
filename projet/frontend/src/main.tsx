import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router-dom'
import './index.css'
import Root from './pages/Root.tsx'
import HomePage from './pages/HomePage.tsx'
import NotFound from './pages/NotFound.tsx'
const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path='/' element={ <Root /> }  errorElement={ <NotFound />}>
        <Route index element={ <HomePage /> } />
      </Route>

    </>




  )
)










ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={ router } />
  </React.StrictMode>,
)
