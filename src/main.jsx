import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Dashboard from './Dashboard.jsx'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Properties from './Properties.jsx'
import NewProperty from './NewProperty.jsx'
import AllProperties from './AllProperties.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Dashboard />
      },
      {
        path: 'properties',
        element: <Properties />,
        children: [
          {
            index: true,
            element: <AllProperties />
          },
          {
            path: 'add-new-property',
            element: <NewProperty />
          }
        ]
      },
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)