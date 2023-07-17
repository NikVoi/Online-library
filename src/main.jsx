import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import './style/style.scss'
import App from './app'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>  
    <BrowserRouter>
      <App />  
    </BrowserRouter>
  </React.StrictMode>
)
