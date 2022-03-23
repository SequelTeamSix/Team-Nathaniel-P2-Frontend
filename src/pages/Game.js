import "./Game.css";

import * as React from 'react';
import Box from "../components/Box";

import { useState, useEffect } from "react";

import axios from "axios";

import { useParams, useLocation } from 'react-router-dom';

function Game(props) {

  const [game, setGame] = useState({console: []});

  const { gameName } = useParams();

  console.log("Props Paramter Value - " + gameName);

  useEffect(() => {
    let isApiSubscribed = true;

    axios
      .get(
        "https://teamnathanielrevatureproject2.azurewebsites.net/gameName/" + gameName
      )
      .then((response) => {
        if (isApiSubscribed) {
          console.log(response);
          setGame(response.data);
        }
      })
      .catch((error) => {
        console.log(error);
      });

    return () => {
      isApiSubscribed = false;
    };
  }, []);


  return (

        <div className='container vh-100'>

            <div className='row mt-5'>
                <Box className='col-12 col-md-4'>
                    <img src={game.boxArt} className='game-image'/>
                </Box>
                
                <div className='col-12 col-md-8'>
                    <div className="game-info">
                        <h1>{game.title}</h1>
                        <p><strong>Release Date:</strong> {game.releaseDate}</p>
                        <p><strong>Game Price:</strong> ${game.gamePrice}</p>
                        <p><strong>Number of Players:</strong> {game.numPlayers}</p>
                        <p><strong>Online Multiplayer:</strong> {game.online ? 'True' : 'False'}</p>
                        <p><strong>Console:</strong> {game.console[0].consoleName}</p>
                    </div>

                </div>
            </div>
        </div>
  );
}

export default Game;