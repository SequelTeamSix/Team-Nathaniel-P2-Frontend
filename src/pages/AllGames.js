import "./AllGames.css";

import Box from "../components/Box";
import { useState, useEffect } from "react";

import axios from "axios";

import {Link, Route} from 'react-router-dom';

function AllGames(props) {
  const [width, updateWidth] = useState(window.innerWidth);
  window.addEventListener("resize", changeSize);

  function changeSize() {
    updateWidth(window.innerWidth);
  }

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
    <div className="container vh-100">
      <div className="row">
        <h1>All Games</h1>
      </div>
      <div className="row">
        {games.map((game) => (
            
            <Link to={"/game"} key={game.gameId} className="col-12 col-sm-6 col-md-3">
                <Box>
                    <img src={game.boxArt} className="games-image" />
                </Box>
            </Link>
            
        ))}
      </div>
    </div>
  );
}

export default AllGames;
