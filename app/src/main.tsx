import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './app'
import { BrowserRouter } from 'react-router-dom'
import './main.css'
import './media.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
