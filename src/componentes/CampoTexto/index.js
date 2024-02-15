import './CampoTexto.css';

const CampoTexto = ({ label, valor, placeholder, obrigatorio = false, aoAlterado }) => {

  const aoDigitado = (evento) => {
    aoAlterado(evento.target.value);
  }

  return (
    <div className='campoTexto'>
        <label htmlFor={label}>{label}</label>
        <input type='text' id={label} name={label} value={valor} placeholder={placeholder} required={obrigatorio} onChange={aoDigitado} />
    </div>
  );
};

export default CampoTexto;