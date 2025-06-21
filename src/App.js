import './App.css';
import gat from'./imagens/gat.jpg';
import github from './imagens/github.svg';
import instagram from './imagens/instagram.svg';
import linkedin from './imagens/linkedin.svg';
import twitch from './imagens/twitch.svg';
import twitter from './imagens/twitter.svg';


function App() {
  return (
    <div className="moldura" >
      <div id="perfil-foto" >
        <img className="fotogatinha" src={gat} alt="fotoPerfil"/>
      </div>

      <span className="insta-user">@rackel.rodrigues</span>

      <div>
        <a ><button className="butao pri">Link 1 </button></a>
        <a ><button className="butao seg">Link 2 </button></a>
        <a ><button className="butao ter">Link 3 </button></a>
        <a> <button className="butao qua">Link 4 </button></a>
      </div>

      <div id="caixa-icons">
        <img src={twitter} alt="rock-twitter" className="icon" />
        <img src={twitch} alt="rock-twitch" className="icon"/>
        <img src={instagram} alt="rock-instagram" className="icon" />
        <img src={linkedin} alt="rock-linkedin" className="icon"/>
        <img src={github} alt="rock-github" className="icon"/>
        
      </div>
    </div>
  );
}

export default App;
