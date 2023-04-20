import './_style.scss'

const Form = () => {
    return (
        <section className='forms'>
            <h2>Selecione o dia e horário para o plantão</h2>
            <form>
                <label for="paciente">Paciente</label>
                <input name="paciente"type="text" placeholder="Nome do Paciente" />
                <label for="data">Data</label>
                <input name='data' type='date' placeholder="Dia" />
                <label for="horario">Horário</label>
                <input name='horario' type="time" placeholder="Horário" />

                <input className="submit" type='submit' value='Continuar'/>
                <a href='#.'>Voltar</a>
            </form>
        </section>
    )
}
export default Form