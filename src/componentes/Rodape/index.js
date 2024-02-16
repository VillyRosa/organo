import './Rodape.css';

const Rodape = () => {
  return (
    <footer className='rodape'>
        <section>
            <ul>
                <li>
                    <a href="facebook" target="_blank">
                        <img src="/imagens/fb.png" alt="facebook-icon" />
                    </a>
                </li>
                <li>
                    <a href="twitter" target="_blank">
                        <img src="/imagens/tw.png" alt="twitter-icon" />
                    </a>
                </li>
                <li>
                    <a href="instagram" target="_blank">
                        <img src="/imagens/ig.png" alt="instagram-icon" />
                    </a>
                </li>
            </ul>
        </section>
        <section>
            <img src="/imagens/logo.png" alt="logo" />
        </section>
        <section>
            <p>Desenvolvido por VillyRosa.</p>
        </section>
    </footer>
  );
}

export default Rodape;