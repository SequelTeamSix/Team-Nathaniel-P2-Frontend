import "./Game.css";

import * as React from "react";
import Box from "../components/Box";

import { useState, useEffect } from "react";

import axios from "axios";

import { useParams, useLocation } from "react-router-dom";

import { Link } from "react-router-dom";

import { useDispatch } from "react-redux";

function Game(props) {
  const [game, setGame] = useState({series: {}});

  const [consoles, setConsoles] = useState([]);

  const [features, setFeatures] = useState([]);

  const { gameName } = useParams();

  const dispatch = useDispatch();

  console.log("Props Paramter Value - " + gameName);

  useEffect(() => {
    let isApiSubscribed = true;

    axios
      .get(
        "https://teamnathanielrevatureproject2.azurewebsites.net/gameName/" +
          gameName
      )
      .then((response) => {
        if (isApiSubscribed) {
          console.log(response);
          setGame(response.data);
          setConsoles(response.data.console);
          setFeatures(response.data.gameFeatures);
        }
      })
      .catch((error) => {
        console.log(error);
      });

    return () => {
      isApiSubscribed = false;
    };
  }, []);

  function addToCart() {
    dispatch({ type: "addToCart", gamePurchase: { game: game, quantity: 1 } });
  }

  return (
    <div className="container">
      <div className="row mt-5">
        <Box className="col-12 col-md-4">
          <img src={game.boxArt} className="game-image" />
        </Box>

        <div className="col-12 col-md-8">
          <div className="game-info">
            <h1>{game.title}</h1>
            <p>
              <strong>Release Date:</strong> {game.releaseDate}
            </p>
            <p>
              <strong>Game Price:</strong> ${game.gamePrice}
            </p>
            <p>
              <strong>Number of Players:</strong> {game.numPlayers}
            </p>
            <p>
              <strong>Online Multiplayer:</strong>{" "}
              {game.online ? "True" : "False"}
            </p>
            <p>
              <strong>Consoles:</strong>
            </p>
          </div>
          <div className="col-md-4 consoles-section">
            {consoles.map((console) => (
              <Link
                key={console.consoleId}
                className="col-12 col-sm-6 col-md-3 mt-4 link-decoration"
                to={"/console/" + console.consoleName}
              >
                <Box className="d-flex flex-column justify-content-center">
                  <img src={console.picture} className="game-image" />
                  <span className="game-name mt-2">{console.consoleName}</span>
                </Box>
              </Link>
            ))}
          </div>
          <span onClick={addToCart}>
            <Box className="add-cart-button">Add to Cart</Box>
          </span>
        </div>
      </div>
      <div className="row mt-5">
        <h3>Game Features</h3>
        {features.map((feature) => (
          
          <p>{feature.body}</p>
          
         
        ))}
      </div>
      {Object.keys(game.series).length > 0 &&
          <div><div>Is part of series</div>
            <div><Link to={'/series/'+game.series.name}><Box><img src={game.series.logo} className='series-image' />{game.series.name}</Box></Link></div>

          </div>}
    </div>
  );
}

export default Game;
