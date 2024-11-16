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
import Invoice from './Invoice.jsx'
import InvoiceInfo from './InvoiceInfo.jsx'
import NewInvoice from './NewInvoice.jsx'
import PropertyFullDetail from './PropertyFullDetail.jsx'
import axios from 'axios'
import Search from './Search.jsx'
import ReceiptVoucher from './ReceiptVoucher.jsx'
import PaymentVoucher from './PaymentVoucher.jsx'
import AllRV from './AllReceiptVoucher.jsx'
import AllPV from './AllPaymentVoucher.jsx'
import NewRV from './NewReceiptVoucher.jsx'
import NewPV from './NewPaymentVoucher.jsx'

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
            element: <AllProperties />,
          },
          {
            path: 'add-new-property',
            element: <NewProperty />
          },
          {
            path: ':property_id',
            element: <PropertyFullDetail />,
            loader: async ({params}) => {
              let response = await axios.get(`http://localhost:7000/api/property-details/${params.property_id}`);
              return response.data  
            }
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
      },
      {
        path: 'invoice',
        element: <Invoice />,
        children: [
          {
            index: true,
            element: <InvoiceInfo />
          },
          {
            path: 'create-new-invoice',
            element: <NewInvoice />
          }
        ]
      },
      {
        path: 'search',
        element: <Search />
      },
      {
        path: 'receipt-voucher',
        element: <ReceiptVoucher />,
        children: [{
          index: true,
          element: <AllRV/>
        }, 
        {
          path: 'new-receipt-voucher',
          element: <NewRV />
        }]
      },
      {
        path: 'payment-voucher',
        element: <PaymentVoucher />,
        children: [{
          index: true,
          element: <AllPV />
        }, 
        {
          path: 'new-payment-voucher',
          element: <NewPV/>
        }]
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)