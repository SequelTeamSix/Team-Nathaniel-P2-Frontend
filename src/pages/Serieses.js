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
            this.setState({serieses: data});
        })
    }

    render() {

        return(
            <div className='container'>
                <div className='row'>
                    {this.state.serieses.map(series => ( <Link key={series.seriesId} to={'/series/'+series.name} className='col-6 col-md-4 col-lg-2'>
                        <Box><img src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Super_Mario_Bros._Logo.svg/800px-Super_Mario_Bros._Logo.svg.png?20140516002826' className='serieses-image' />{series.name}</Box>
                    </Link>))}

                    <Link to='/series/Test' className='col-6 col-md-4 col-lg-2'>
                        <Box><img src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Super_Mario_Bros._Logo.svg/800px-Super_Mario_Bros._Logo.svg.png?20140516002826' className='serieses-image' />Super Mario Bros</Box>
                    </Link>
                </div>
            </div>
        );
    }
}