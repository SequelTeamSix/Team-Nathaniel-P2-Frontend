import './Character.css';

import Box from '../components/Box';
import * as React from 'react';

export default class Character extends React.Component {
    constructor(props) {
        super(props);
        this.state = {width: 0,
            character: {characterName: '', description: '', image: '', catchPhrase: ''}};
    }

    changeSize = () => {
        this.setState({width: window.innerWidth});
     }

     componentDidMount = () => {
        let name = this.props.match.params.characterName
         fetch('https://teamnathanielrevatureproject2.azurewebsites.net/CharacterName/'+name).then(response => {
             return response.json();
         }).then(data => {
             this.setState({character: data});
         })
     }

    render() {

        window.addEventListener('resize', this.changeSize);

        return (
            <div className='container'>
                <div className='row'>
                    <Box className='col-12 col-md-4 '>
                        <img src={this.state.character.image} className='character-image'/>
                    </Box>
                    <div className='col-12 col-md-8 d-flex align-items-center'>
                        <div>
                            <h1 className='name-content'>{this.state.character.characterName}</h1>
                            <h2 className='name-content'>{this.state.character.catchPhrase}</h2>
                        </div>

                    </div>
                </div>

                <div className='row'>
                    {this.state.character.description}
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
}

