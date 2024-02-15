import Colaborador from '../Colaborador';
import './Time.css';

const Time = ({ nome, corPrimaria, corSecundaria, colaboradores }) => {
  return (
    (colaboradores.length > 0) && (
      <section className='time' style={{backgroundColor: corSecundaria}}>
        <h3 style={{borderColor: corPrimaria}}>{nome}</h3>
        <div className='colaboradores'>
          {colaboradores.map(colaborador => <Colaborador key={colaborador.nome} {...colaborador} cor={corPrimaria} />)}
        </div>
      </section>
    )
  );
}

export default Time;