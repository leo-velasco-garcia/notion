import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { AppContextProvider } from './context/AppContextProvider.jsx'
import './assets/scss/App.scss'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <AppContextProvider>
    <StrictMode>
      <App />
    </StrictMode>
  </AppContextProvider>,
)
