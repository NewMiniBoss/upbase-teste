import React from 'react'
import ReactDOM from 'react-dom/client'
import './_style.scss'
import Loader from './components/Loader'
import Header from './components/Header'
import Form from './components/Forms'
import Icon from './components/Icons'
import { AiFillHome, AiFillHeart } from 'react-icons/ai'
import { BsFillClipboardPlusFill } from 'react-icons/bs'
import { FaUserAlt } from 'react-icons/fa'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Loader />
    <Header />
    <main>
      <Form />
    </main>
    <footer>

      <Icon icon={<AiFillHome size="25px" />} p="Home" />
      <Icon icon={<BsFillClipboardPlusFill size="25px" />} p="Plantões" />
      <Icon icon={<AiFillHeart size="25px" />} p="Favoritos" />
      <Icon icon={<FaUserAlt size="25px" />} p="Conta" />

    </footer>
  </React.StrictMode>
)