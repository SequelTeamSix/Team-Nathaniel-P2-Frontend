import './Home.css';

import Box from '../components/Box';
import MegamanBox from '../components/MegamanBox';

import { useState } from "react";

import { Link } from 'react-router-dom';

function Home(props) {
    const [width, updateWidth] = useState(window.innerWidth);
    window.addEventListener('resize', changeSize);

    function changeSize() {
        updateWidth(window.innerWidth);
    }

    return (
        <div className='container'>
            <div>
                
            </div>
            <div className='row mt-5'>
                <h1>Featured Product</h1>
            </div>

            <div className='row mt-5 d-flex align-items-center mario-rpg-section'>
                <img src={require("../images/misc/mario-pipe.png")}  className='mario-pipe-image' />
                <Link  to={"/game/" + "Super Mario RPG: Legend of the Seven Stars"} className='mario-rpg-image'>
                    <img src='https://upload.wikimedia.org/wikipedia/en/thumb/8/89/SuperMarioRPGSNESCoverArtUS.jpg/220px-SuperMarioRPGSNESCoverArtUS.jpg' className='mario-boxart'  alt='super mario rpg' />
                </Link>
            </div>
            <div className='row d-flex justify-content-between mario-section'>  
                <div className='col-6 mt-3 mario-title '>
                    <h2>Super Mario RPG:</h2>
                    <p>Legend of the Seven Stars</p>
                    <img src={require("../images/icons/5-stars-pixel.png")} width='200px' alt='5 stars' /><br/>
                    <button className="mt-5">Add to Cart</button>
                </div>    
                <img src={require("../images/characters/mario-jumping.png")} className='mario-image' alt='mario' />
            </div>
            

            <div  className='row gap-3 justify-content-evenly align-items-end retro-deals-section'>
                <div class='d-flex justify-content-evenly align-items-center mb-5'>
                    <img src={require("../images/characters/bob-omb-v2.png")} className='bobomb-img' alt='bob-omb' />
                    <h2>Bob-omb Deals</h2>
                    <img src={require("../images/characters/bob-omb-v2.png")} className='bobomb-img img-flip' alt='bob-omb' />
                </div>
                <Box className='col box-deal'>
                    <img src={require("../images/consoles/atari-2600.png")} className='retro-deals-image' alt='atari 2600' />
                    <p>Atari 2600</p>
                    <p>$70.00</p>
                    <img src={require("../images/icons/5-stars-pixel.png")} className='stars-image' alt='5 stars' /><br/>
                    <button>Add to Cart</button>
                </Box>
                <Box className='col box-deal'>
                    <img src={require("../images/consoles/nes-console.png")} className='retro-deals-image' alt='nes' />
                    <p>NES</p>
                    <p>$150.00</p>
                    <img src={require("../images/icons/5-stars-pixel.png")} className='stars-image' alt='5 stars' /><br/>
                    <button>Add to Cart</button>
                </Box>
                <Box className='col box-deal'>
                    <img src={require("../images/consoles/atari-2600.png")} className='retro-deals-image' alt='atari 2600' />
                    <p>Atari 2600</p>
                    <p>$70.00</p>
                    <img src={require("../images/icons/5-stars-pixel.png")} className='stars-image' alt='5 stars' /><br/>
                    <button>Add to Cart</button>
                </Box>
            </div>
            
            <div className='row d-flex justify-content-center mt-5'>
                <div className='col-md-4 d-flex flex-column align-items-center justify-content-center'>
                    <MegamanBox >
                        <Link  to={"/game/" + "Mega Man 2"} >
                            <img src={require("../images/boxarts/megaman2-box.png")} className='game-image' alt="megaman 2"/>
                        </Link>
                    </MegamanBox>
                    <button className='mt-4'>Add to Cart</button>
                </div>
                
                <div className='col-md-4'>      
                    <img src={require("../images/characters/megaman-shooting.png")} className='megaman-image'/>
                </div>
            </div>
        </div>
    )
}

export default Home;