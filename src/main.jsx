import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Oggy from './Oggy.jsx'
import More from './More.jsx'
import Scroll from './Scroll.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Oggy />
    <More />
    <Scroll />
  </StrictMode>,
)
