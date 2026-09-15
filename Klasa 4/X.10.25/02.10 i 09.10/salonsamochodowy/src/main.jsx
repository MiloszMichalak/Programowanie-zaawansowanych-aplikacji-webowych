import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import SalonSamochodowy from "./SalonSamochodowy/SalonSamochodowy"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <SalonSamochodowy />
  </StrictMode>,
)
