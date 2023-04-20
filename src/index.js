import React from 'react'
import ReactDOM from 'react-dom/client'
import './_style.scss'
import Header from './components/Header'
import Form from './components/Forms'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Header />
    <main>
      <Form />
    </main>
    <footer>
      
    </footer>
  </React.StrictMode>
)