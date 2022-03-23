import * as React from 'react';
import Box from "../components/Box";

export default class Console extends React.Component {
    constructor(props) {
        super(props);
        this.state = {console: {consoleName: '', consoleFeature: [], game: [], releaseDate: ''}}
    }

    componentDidMount() {
        let name = this.props.match.params.consoleName
        fetch('https://teamnathanielrevatureproject2.azurewebsites.net/consoleName/'+name).then(response => {
            return response.json();
        }).then(data => {
            console.log(data);
            this.setState({console: data});
            console.log(this.state);
            // for (let x = 0; x < data.features.length; x++) {
            //     if(data.features[x]) {
            //
            //     } else {
            //
            //     }
            // }
        });

    }

    render() {

        return (
            <div className='container'>
                <div className='row'>
                    <Box className='col-12 col-md-6'>
                        <img src='' />
                    </Box>
                    <Box className='col-12 col-md-6'>
                        <img src='' />
                    </Box>
                </div>
                <div className='row'>
                    <h1>{this.state.console.consoleName}</h1>
                </div>
                <div className='row'>
                    Release Date: {this.state.console.releaseDate}
                </div>
                <div className='row'>
                    <h3>Features:</h3>
                    <ul>
                    {this.state.console.consoleFeature.map(feature => (<li key={feature.consoleFeatureId}>
                        <span>{feature.title}</span>: {feature.body}
                    </li>))}
                    </ul>
                </div>
                <div className='row'>
                    Games
                </div>
                <div className='row'>
                    {this.state.console.game.map(game => (<Box>
                        <img src={game.boxArt} /><span>{game.title}</span> </Box>))}
                </div>
            </div>
        )
    }
}