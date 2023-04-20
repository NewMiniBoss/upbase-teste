import './_style.scss'

const Icons = (props) => {
    return (
        <div className='icons'>
            {props.icon}
            <p>{props.p}</p>
        </div>
    )
}
export default Icons