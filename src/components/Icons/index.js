import './_style.scss'

const Icon = (props) => {
    const appClick = () => {
        alert('UpBase - Teste')
    }
    
    return (
        <div className='icons' onClick={appClick}>
            <span>{props.icon}</span>
            <p>{props.p}</p>
        </div>
    )
}
export default Icon