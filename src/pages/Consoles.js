import * as React from 'react';
import Box from "../components/Box";
import {Link} from 'react-router-dom';
import './Consoles.css';

export default class Consoles extends React.Component {
    constructor(props) {
        super(props);
        this.state = {consoles: []};
    }

    componentDidMount() {
        fetch('https://teamnathanielrevatureproject2.azurewebsites.net/getAllConsoles').then(response => {
            return response.json();
        }).then(data => {
            this.setState({consoles: data});
        })
    }

    render() {

        return (
            <div className='container'>
                <div className='row'>
                    {this.state.consoles.map(console => <Link key={console.consoleId} className='col-6 col-md-4 col-lg-2' to={'/console/'+console.consoleName}>
                        <Box><img src='https://seeklogo.com/images/N/nintendo-entertainment-system-logo-96FB88FEAC-seeklogo.com.png' className='cons-image' />
                            <span className='cons-name'>{console.consoleName}</span> </Box>
                    </Link> )}
                </div>

            </div>
        )
    }
}