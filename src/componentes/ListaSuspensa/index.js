import './ListaSuspensa.css';

const ListaSuspensa = ({ label, itens, valor, obrigatorio = false, aoAlterado }) => {

  const aoDigitado = (evento) => {
    aoAlterado(evento.target.value);
  }

  return (
    <div className='listaSuspensa'>
        <label htmlFor={label}>{label}</label>
        <select id={label} name={label} defaultValue={valor} required={obrigatorio} onChange={aoDigitado}>
          <option value='' disabled>Selecione uma opção</option>
          {itens.map((item) => {
            return <option key={item} value={item}>{item}</option>
          })}
        </select>
    </div>
  );
}

export default ListaSuspensa;