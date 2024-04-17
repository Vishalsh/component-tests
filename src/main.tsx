import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import AppWithTheme from './AppWithTheme.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
    <AppWithTheme />
  </React.StrictMode>,
)
