import "./AllGames.css";

import Box from "../components/Box";
import { useState, useEffect } from "react";

import axios from "axios";

import { Link } from 'react-router-dom';

function AllGames(props) {

  const [games, setGames] = useState([]);

  useEffect(() => {
    let isApiSubscribed = true;

    axios
      .get(
        "https://teamnathanielrevatureproject2.azurewebsites.net/getAllGames"
      )
      .then((response) => {
        if (isApiSubscribed) {
          console.log(response);
          setGames(response.data);
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
    <div className="container">
      <div className="row">
        <h1>All Games</h1>
      </div>
      <div className="row">
        {games.map((game) => (

            <Link key={game.gameId} className="col-12 col-sm-6 col-md-3 mt-4 link-decoration" to={"/game/" + game.title} >
                <Box className='allGames-box d-flex flex-column justify-content-center'>
                    <img src={game.boxArt} className="game-image" />
                    <span className='game-name mt-2'>{game.title}</span>
                </Box>
            </Link>

        ))}
      </div>
    </div>
  );
}

export default AllGames;

