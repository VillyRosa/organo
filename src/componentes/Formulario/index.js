import './Formulario.css';
import CampoTexto from '../CampoTexto';
import ListaSuspensa from '../ListaSuspensa';
import Botao from '../Botao';
import { useState } from 'react';

const Formulario = ({ aoColaboradorCadastrado, times }) => {

  const [nome, setNome] = useState('');
  const [cargo, setCargo] = useState('');
  const [imagem, setImagem] = useState('');
  const [time, setTime] = useState('');

  const aoSalvar = (evento) => {
    evento.preventDefault();

    try {
      aoColaboradorCadastrado({ nome, cargo, imagem, time });
      setNome('');
      setCargo('');
      setImagem('');
      setTime('');
    } catch (erro) {
      alert(erro.message);
    }
  }

  return (
    <section className='formulario'>
        <form onSubmit={aoSalvar}>
          <h2>Preencha os dados para criar o card do colaborador.</h2>
          
          <CampoTexto 
           obrigatorio 
           label='Nome' 
           placeholder='Digite seu nome' 
           aoAlterado={setNome}
           valor={nome}
          />

          <CampoTexto 
           obrigatorio 
           label='Cargo' 
           placeholder='Digite seu cargo' 
           aoAlterado={setCargo}
           valor={cargo}
          />

          <CampoTexto
           obrigatorio 
           label='Imagem' 
           placeholder='Informe o endereço da imagem' 
           aoAlterado={setImagem}
           valor={imagem}
          />

          <ListaSuspensa
           obrigatorio 
           label='Time' 
           itens={times} 
           aoAlterado={setTime}
           valor={time}
          />

          <Botao>Criar card</Botao>
        </form>
    </section>
  );
}

export default Formulario;