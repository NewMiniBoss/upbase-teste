import './_style.scss'
import Nav from '../Nav'
import { HiArrowLeft } from 'react-icons/hi'

const Header = () => {

    const eventReturn = () => {
        alert('UpBase - Teste')
    }

    return (
        <header>
            <span className='back' onClick={eventReturn}><HiArrowLeft size="35px" color='white'/></span>
            <h1>Contratar</h1>
            <Nav />
        </header>
    )
}
export default Header