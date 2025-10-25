import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import ProjectsPage from './pages/ProjectsPage.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ProjectsPage />
  </StrictMode>,
)
