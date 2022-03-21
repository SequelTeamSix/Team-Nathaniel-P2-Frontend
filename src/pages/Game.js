import "./Game.css";

import Box from "../components/Box";
import { useState, useEffect } from "react";

import axios from "axios";

function Game(props) {
  const [width, updateWidth] = useState(window.innerWidth);
  window.addEventListener("resize", changeSize);

  function changeSize() {
    updateWidth(window.innerWidth);
  }


  return (
        <div className='container vh-100'>

            <div className='row'>
                <Box className='col-12 col-md-4'>
                    <img src='https://upload.wikimedia.org/wikipedia/en/thumb/0/03/Super_Mario_Bros._box.png/220px-Super_Mario_Bros._box.png' className='character-image'/>
                </Box>
                <div className='col-12 col-md-8'>
                    <div className='text-left'>
                        <h1>Super Mario Bros.</h1>
                        <p>Console: NES</p>
                        <p>Release Date: September 13, 1985</p>
                        <p>Game Price: $30</p>
                        <p>Number of Players: 2</p>
                        <p>Online Multiplayer: No</p>
                    </div>

                </div>
            </div>
        </div>
  );
}

export default Game;
