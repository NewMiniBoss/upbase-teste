import './_style.scss'
import Seta from '../../assets/seta-esquerda.png'
import Nav from '../Nav'

const Header = () => {
    return (
        <header>
            <a href='#.'><img src={Seta} alt='seta para esquerda'></img></a>
            <h1>Contratar</h1>
            <Nav />
        </header>
    )
}
export default Header