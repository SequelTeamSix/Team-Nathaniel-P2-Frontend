import './Character.css';

import Box from '../components/Box';
import {useState} from 'react';

function Character(props) {
    const [width, updateWidth] = useState(window.innerWidth);
    window.addEventListener('resize', changeSize);

    function changeSize() {
        updateWidth(window.innerWidth);
    }

    return (
        <div className='container'>
            <div className='row'>
                <Box className='col-12 col-md-4 '>
                    <img src='https://supermariorun.com/assets/img/stage/obj_mode1.png' className='character-image'/>
                </Box>
                <div className='col-12 col-md-8 d-flex align-items-center'>
                    <div>
                        <h1 className='name-content'>Mario</h1>
                        <h2 className='name-content'>It's a me Mario</h2>
                    </div>

                </div>
            </div>

            <div className='row'>
                Mario is one of the most well known characters in all of gaming. Originally called jump man in the
                original Donkey Kong game. Many people do not know that Mario is named after a real person which is
                Mario Segale who was a former landlord of Nintendo of America.
            </div>
            <div className='row'>
                <Box className='col-12 col-sm-6 col-md-3'>
                    <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Super_Mario_Bros._Logo.svg/800px-Super_Mario_Bros._Logo.svg.png?20140516002826' className='series-image' />
                          Super Mario Bros
                </Box>
                <Box className='col-12 col-sm-6 col-md-3'>
                    <img src='https://static.wikia.nocookie.net/logopedia/images/3/3b/Mario_Party_Logo_(MPSuperstars).png' className='series-image' />
                    Mario Party
                </Box>
            </div>
        </div>
    )
}

export default Character