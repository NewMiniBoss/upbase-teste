import './_style.scss'

const Form = () => {
    return (
        <section className='forms'>
            <h2>Selecione o dia e horário para o plantão</h2>
            <form>
                <input type="text" placeholder="Nome do Paciente" />
                <input type='date' placeholder="Dia" />
                <input type="time" placeholder="Horário" />
                <input className="submit" type='submit' value='Continuar'/>
                <a href='#.'>Voltar</a>
            </form>
        </section>
    )
}
export default Form