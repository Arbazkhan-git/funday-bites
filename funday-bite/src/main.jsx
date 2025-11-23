import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Storecontextprovider from './components/context/Storecontextprovider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Storecontextprovider>
    <App />
    </Storecontextprovider>
  </StrictMode>,
)
