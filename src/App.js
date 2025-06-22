import axios from "axios";
import "./App.css";
import { Circles } from "react-loader-spinner";
import github from "./images/github.svg";
import instagram from "./images/instagram.svg";
import linkedin from "./images/linkedin.svg";
import twitch from "./images/twitch.svg";
import twitter from "./images/twitter.svg";
import React, { useEffect, useState } from "react";

function App() {
  const [userDataPhoto, setUserDataPhoto] = useState("");
  const [userDataName, setUserDataName] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`https://api.github.com/users/RackelRodrigues`)
      .then((response) => {
        setUserDataPhoto(response.data.avatar_url);
        setUserDataName(response.data.login);
        setLoading(false);
      })
      .catch((err) => {
        console.err(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="moldura">
        <p>Loading ...</p>
      </div>
    );
  }

  return (
    <div className="moldura">
      <div id="Container">
        <div>
          <img className="fotogatinha" src={userDataPhoto} alt={userDataName} />
        </div>

        <p className="socialName">@{userDataName}</p>

        <div className="ButtonsNav">
          <button>Link 1</button>

          <button>Link 2</button>

          <button>Link 3</button>

          <button>Link 4</button>
        </div>

        <div id="caixa-icons">
          <img src={twitter} alt="rocket-twitter" className="icon" />
          <img src={twitch} alt="rocket-twitch" className="icon" />
          <img src={instagram} alt="rocket-instagram" className="icon" />
          <img src={linkedin} alt="rocket-linkedin" className="icon" />
          <img src={github} alt="rocket-github" className="icon" />
        </div>
      </div>
    </div>
  );
}

export default App;
