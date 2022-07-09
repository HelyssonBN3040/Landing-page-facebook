import {Footer} from "./components/Footer"

export function App() {
  return (
    <div className="main">
      <div className="body">
        <div className="fb-logo">
          <img
            src="https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg"
            alt=""
          />
          <h3>
            O Facebook ajuda você a se conectar e compartilhar com as pessoas
            que fazem parte da sua vida.
          </h3>
        </div>
        <div className="main-box">
          <div className="box-login">
            <input type="email" placeholder="Email ou telefone" />
            <input type="password" placeholder="Senha" />
            <input
              type="button"
              name=""
              value="Entrar"
              id=""
              className="btn-entrar"
            />
            <a href="">Esqueceu a senha?</a>
            <div className="line"></div>
            <div className="button">
              <a href="">
                <button>Criar nova conta </button>
              </a>
            </div>
          </div>
          <div className="text-footer">
            <a href="">Criar uma Página</a>
            <small> para uma celebridade, uma marca ou uma empresa.</small>
          </div>
        </div>
      </div>

      <footer>
        <div className="idiomas">
          <ul>
            <li>
              <a href="">Português(Brasil)</a>
            </li>
            <li>
              <a href="">English (US)</a>
            </li>
            <li>
              <a href="">Español</a>
            </li>
            <li>
              <a href="">Français (France)</a>
            </li>
            <li>
              <a href="">Italiano</a>
            </li>
            <li>
              <a href="">Deutsch</a>
            </li>
            <li>
              <a href="">العربية</a>
            </li>
            <li>
              <a href="">हिन्दी</a>
            </li>
            <li>
              <a href="">中文(简体)</a>
            </li>
            <li>
              <a href="">日本語</a>
            </li>
          </ul>
          <div className="line-footer"></div>
          <Footer/>

        </div>
      </footer>
    </div>
  );
}
