import "./Home.css";

import Box from "../components/Box";
import MegamanBox from "../components/MegamanBox";
import Snake from "../components/Snake";

import { useState } from "react";

import { Link } from "react-router-dom";

import starsSprite from "../images/icons/5-stars-pixel.png";
import bobombSprite from "../images/characters/bob-omb-v2.png";
import marioSprite from "../images/characters/mario-jumping.png";
import megamanSprite from "../images/characters/megaman-shooting.png";
import bulletSprite from "../images/characters/megaman-bullet.png";
import megamanGame from "../images/boxarts/megaman2-box.png";
import snakeSprite from "../images/characters/snake-reverse.png";
import pipeSprite from "../images/misc/mario-pipe.png";

import { useDispatch } from "react-redux";

import Carousel from "react-bootstrap/Carousel";

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
        <h1>Featured Products</h1>
      </div>

      <Carousel className="featured-carousel">
        <Carousel.Item>
          <div className="row mt-5 align-items-center">
            <div className="col-4 col-md-4 col-sm-4">
              <img src={pipeSprite} className="img-fluid mario-pipe-image" />
            </div>
            <div className="col-4 col-md-4 col-sm-4">
              <Link
                to={"/game/" + "Super Mario RPG: Legend of the Seven Stars"}
                className="img-fluid mario-rpg-image"
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/en/thumb/8/89/SuperMarioRPGSNESCoverArtUS.jpg/220px-SuperMarioRPGSNESCoverArtUS.jpg"
                  className="img-fluid mario-boxart"
                  alt="super mario rpg"
                />
              </Link>
            </div>

            <div className="row mb-5 justify-content-between mario-section">
              <div className="col-8 col-md-8 col-sm mt-3 mario-title ">
                <h2 className="text-light">Super Mario RPG:</h2>
                <p className="text-light">Legend of the Seven Stars</p>
                <img
                  src={starsSprite}
                  className="img-fluid"
                  width="200px"
                  alt="5 stars"
                />
              </div>
              <div className="col-4 col-md-4 col-sm">
                <img
                  src={marioSprite}
                  className="img-fluid mario-image"
                  width="250px"
                  alt="mario"
                />
              </div>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="row justify-content-around align-items-center megaman-section ">
            <div className="col col-md-6 col-sm">
              <img
                src={megamanSprite}
                className="img-fluid megaman-image img-flip"
              />
            </div>
            <div className="col col-md-4 col-sm">
              <MegamanBox>
                <Link to={"/game/" + "Mega Man 2"}>
                  <img
                    src={megamanGame}
                    className="img-fluid game-image"
                    alt="megaman 2"
                  />
                </Link>
              </MegamanBox>
            </div>
            <div class="row mb-5 justify-content-center">
              <div className="col-8 col-md-8 col-sm mt-3">
                <h2 className="text-light">Mega Man 2</h2>
                <img
                  src={starsSprite}
                  className="img-fluid"
                  width="200px"
                  alt="5 stars"
                />
              </div>
            </div>
          </div>
        </Carousel.Item>
      </Carousel>

      <div className="row align-items-center bobomb-section">
        <div className="col-3">
          <img
            src={bobombSprite}
            className="img-fluid bobomb-img"
            alt="bob-omb"
          />
        </div>
        <div className="col-6">
          <h2>Bob-omb Deals</h2>
        </div>
        <div className="col-3">
          <img
            src={bobombSprite}
            className="img-fluid bobomb-img img-flip"
            alt="bob-omb"
          />
        </div>
      </div>

      <div className="row justify-content-center mt-5 retro-deals-section">
        <div className="col-md col-sm-12">
          <Box className="box-deal">
            <Link to={"/game/" + deal1}>
              <img
                src="https://upload.wikimedia.org/wikipedia/en/thumb/0/03/Super_Mario_Bros._box.png/220px-Super_Mario_Bros._box.png"
                className="img-fluid retro-deals-image mt-2"
                alt="mario"
              />
            </Link>
            <p className="mt-3">Super Mario Bros.</p>
            <p>$30.00</p>
            <img
              src={starsSprite}
              className="img-fluid stars-image"
              width="200px"
              alt="5 stars"
            />
          </Box>
        </div>
        <div className="col-md col-sm-12">
          <Box className="box-deal">
            <Link to={"/game/" + deal2}>
              <img
                src="https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Legend_of_zelda_cover_%28with_cartridge%29_gold.png/220px-Legend_of_zelda_cover_%28with_cartridge%29_gold.png"
                className="img-fluid retro-deals-image mt-2"
                alt="zelda"
              />
            </Link>
            <p className="mt-3">The Legend of Zelda</p>
            <p>$30.00</p>
            <img
              src={starsSprite}
              className="img-fluid stars-image"
              width="200px"
              alt="5 stars"
            />
          </Box>
        </div>
        <div className="col-md col-sm-12">
          <Box className="box-deal">
            <Link to={"/game/" + deal3}>
              <img
                src="https://upload.wikimedia.org/wikipedia/en/thumb/5/57/Doom_cover_art.jpg/220px-Doom_cover_art.jpg"
                className="img-fluid mt-2 retro-deals-image"
                alt="doom"
              />
            </Link>
            <p className="mt-3">Doom</p>
            <p>$25.00</p>
            <img
              src={starsSprite}
              className="img-fluid stars-image"
              width="200px"
              alt="5 stars"
            />
          </Box>
        </div>
      </div>

      <h2 className="snake-title">Ethan's Snake Game</h2>

      <div className="row justify-content-center snake-section">
        <div className="row snake-game" style={{ width: 460, height: 450 }}>
          <Snake />
        </div>
        <div className="col-md col-sm-12">
          <img src={snakeSprite} className="img-fluid" />
        </div>
      </div>

      {/* <div className="row justify-content-around align-items-center pb-5 megaman-section ">
        <div className="col col-md-6 col-sm">
          <img
            src={megamanSprite}
            className="img-fluid megaman-image img-flip"
          />
        </div>
        <div className="col col-md-4 col-sm">
          <MegamanBox>
            <Link to={"/game/" + "Mega Man 2"}>
              <img
                src={megamanGame}
                className="img-fluid game-image"
                alt="megaman 2"
              />
            </Link>
          </MegamanBox>
        </div>
      </div> */}
      <div className="row"></div>
    </div>
  );
}

export default Home;
