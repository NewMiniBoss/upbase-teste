import './_style.scss'
import { useRef } from 'react'

const Nav = () => {
    const elementoMenu = useRef(null)
    const elementoLista = useRef(null)
    
    const menuEvent = () => {
        const btn = elementoMenu.current
        const lista = elementoLista.current
        
        btn.classList.toggle('botao-animation')
        lista.classList.toggle('lista-ativa')   
    }

    return (
        <nav>
            <div onClick={menuEvent}><span ref={elementoMenu}></span></div>
            <ul ref={elementoLista}>
                <li><a href="#.">Dev. Gabriel Lazari</a></li>
                <li><a href="https://www.linkedin.com/in/gabriel-f-lazari/">Linkedin</a></li>
                <li><a href="https://github.com/NewMiniBoss">GitHub</a></li>
                <li><a href="https://newminiboss.github.io/portifolio-front/">Portifólio</a></li>
                <li><a href="https://drive.google.com/file/d/1-klqG5aAzBP3rLqWe67m_lkWaMGoaFCk/view">Currículo</a></li>
            </ul>
        </nav>
    )
}

export default Nav