import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <div>IAN Test</div>
    <div>IAN Test 2</div>
  </StrictMode>,
)
