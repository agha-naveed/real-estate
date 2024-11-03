import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Dashboard from './Dashboard.jsx'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Properties from './Properties.jsx'
import NewProperty from './NewProperty.jsx'
import AllProperties from './AllProperties.jsx'
import Buyer from './Buyer.jsx'
import Seller from './Seller.jsx'
import BuyerInfo from './BuyerInfo.jsx'
import AddBuyer from './AddBuyer.jsx'
import SellerInfo from './SellerInfo.jsx'
import AddSeller from './AddSeller.jsx'

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
      {
        path: "buyer-info",
        element: <Buyer />,
        children: [
          {
            index: true,
            element: <BuyerInfo />
          },
          {
            path: 'add-new-buyer',
            element: <AddBuyer />
          }
        ]
      },
      {
        path: "seller-info",
        element: <Seller />,
        children: [
          {
            index: true,
            element: <SellerInfo />
          },
          {
            path: 'add-new-seller',
            element: <AddSeller />
          }
        ]
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)