import * as React from 'react';
import Box from '../components/Box';
import {Link} from "react-router-dom";
import './Serieses.css';

export default class Serieses extends React.Component {
    constructor(props) {
        super(props);
        this.state = {serieses: []}
    }

    componentDidMount() {
        fetch('https://teamnathanielrevatureproject2.azurewebsites.net/getAllSeries').then(response => {
            return response.json();
        }).then(data => {
            console.log(data);
            this.setState({serieses: data});
        })
    }

    render() {

        return(
            <div className='container vh-100'>
                <div className='row'>
                    {this.state.serieses.map(series => ( <Link key={series.seriesId} to={'/series/'+series.name} className='col-6 col-md-4 col-lg-2'>
                        <Box className='series-box d-flex flex-column justify-content-center'><img src={series.logo} className='serieses-image' />{series.name}</Box>
                    </Link>))}
                </div>
            </div>
        );
    }
}