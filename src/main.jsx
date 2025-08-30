import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css'
import './index.css'
import App from './App.jsx'
import { Recipe } from './components/Recipe.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Recipe />
  </StrictMode>,
)
