import React from 'react'
import ReactDOM from 'react-dom/client'

import './global/style.scss'
import Header from './components/header/header'
import Main from './components/body/body'
import Side from './components/side/side'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className="wrapper">
      <Side />
      <Header />
      <Main />
    </div>
  </React.StrictMode>
)
