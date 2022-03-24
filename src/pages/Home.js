import "./Home.css";

import Box from "../components/Box";
import MegamanBox from "../components/MegamanBox";
import Snake from "../components/Snake";

import { useState } from "react";

import { Link } from "react-router-dom";

import starsSprite from "../images/icons/5-stars-pixel.png";
import bobombSprite from "../images/characters/bob-omb-v2.png";
import marioSprite from "../images/characters/mario-jumping.png";
import megamanSprite from "../images/characters/megaman-jumping.png";
import bulletSprite from "../images/characters/megaman-bullet.png";
import megamanGame from "../images/boxarts/megaman2-box.png";

import { useDispatch } from "react-redux";

function Home(props) {
  const [width, updateWidth] = useState(window.innerWidth);
  window.addEventListener("resize", changeSize);

  const dispatch = useDispatch();

  const deal1 = "Super Mario Bros.";
  const deal2 = "The Legend of Zelda";
  const deal3 = "Doom";

  function changeSize() {
    updateWidth(window.innerWidth);
  }

  return (
    <div className="container">
      <div className="row mt-5">
        <h1>Featured Product</h1>
      </div>

      <div className="row mt-5 d-flex align-items-center mario-rpg-section">
        <img
          src={require("../images/misc/mario-pipe.png")}
          className="mario-pipe-image"
        />
        <Link
          to={"/game/" + "Super Mario RPG: Legend of the Seven Stars"}
          className="mario-rpg-image"
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/en/thumb/8/89/SuperMarioRPGSNESCoverArtUS.jpg/220px-SuperMarioRPGSNESCoverArtUS.jpg"
            className="mario-boxart"
            alt="super mario rpg"
          />
        </Link>
      </div>

      <div className="row d-flex justify-content-between mario-section">
        <div className="col-6 mt-3 mario-title ">
          <h2>Super Mario RPG:</h2>
          <p>Legend of the Seven Stars</p>
          <img src={starsSprite} width="200px" alt="5 stars" />
        </div>
        <img src={marioSprite} className="mario-image" alt="mario" />
      </div>

      <div className="row gap-3 justify-content-evenly align-items-end retro-deals-section">
        <div class="d-flex justify-content-evenly align-items-center mb-5">
          <img src={bobombSprite} className="bobomb-img" alt="bob-omb" />
          <h2>Bob-omb Deals</h2>
          <img
            src={bobombSprite}
            className="bobomb-img img-flip"
            alt="bob-omb"
          />
        </div>
        <Box className="col box-deal">
          <Link to={"/game/" + deal1}>
            <img
              src="https://upload.wikimedia.org/wikipedia/en/thumb/0/03/Super_Mario_Bros._box.png/220px-Super_Mario_Bros._box.png"
              className="retro-deals-image mt-2"
              alt="atari 2600"
            />
          </Link>
          <p className="mt-3">Super Mario Bros.</p>
          <p>$30.00</p>
          <img src={starsSprite} className="stars-image" alt="5 stars" />
        </Box>
        <Box className="col box-deal">
          <Link to={"/game/" + deal2}>
            <img
              src="https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Legend_of_zelda_cover_%28with_cartridge%29_gold.png/220px-Legend_of_zelda_cover_%28with_cartridge%29_gold.png"
              className="retro-deals-image mt-2"
              alt="nes"
            />
          </Link>
          <p className="mt-3">The Legend of Zelda</p>
          <p>$30.00</p>
          <img src={starsSprite} className="stars-image" alt="5 stars" />
        </Box>
        <Box className="col box-deal">
          <Link to={"/game/" + deal3}>
            <img
              src="https://upload.wikimedia.org/wikipedia/en/thumb/5/57/Doom_cover_art.jpg/220px-Doom_cover_art.jpg"
              className="retro-deals-image mt-2"
              alt="atari 2600"
            />
          </Link>
          <p className="mt-3">Doom</p>
          <p>$25.00</p>
          <img src={starsSprite} className="stars-image" alt="5 stars" />
        </Box>
      </div>

      <h2 className='mt-5'>Ethan's Snake Game</h2>

      <div className='row snake-section'>
            <Snake className='snake-game'/>
        </div>

      <div className="row d-flex justify-content-between megaman-section">
        <div className="col-md-4 d-flex align-items-center">
          <img
            src={megamanSprite}
            className="megaman-image"
          />
          <img src={bulletSprite} className='bullet-image' />
        </div>
        <div className="col-md-4 d-flex flex-column align-items-center justify-content-center">
          <MegamanBox>
            <Link to={"/game/" + "Mega Man 2"}>
              <img
                src={megamanGame}
                className="game-image"
                alt="megaman 2"
              />
            </Link>
          </MegamanBox>
        </div>
      </div>
        
        
        
      
    </div>
  );
}

export default Home;
