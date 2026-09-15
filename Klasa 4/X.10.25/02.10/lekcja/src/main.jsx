import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import BookClass from './BookClass.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BookClass />
  </StrictMode>,
)
