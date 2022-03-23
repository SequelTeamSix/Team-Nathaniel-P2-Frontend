import * as React from "react";
import Box from "../components/Box";
import './Series.css';

export default class Series extends React.Component {
    constructor(props) {
        super(props);
        this.state = {width: 0,
            series: {name: '', description: '', image: '', logo: ''}};
    }

    componentDidMount = () => {
        let name = this.props.match.params.seriesName
        fetch('https://teamnathanielrevatureproject2.azurewebsites.net/SeriesName/'+name).then(response => {
            return response.json();
        }).then(data => {
            this.setState({series: data});
        })
    }

    render() {

        return (
            <div className='container'>
                <div className='row'>
                    <Box>
                        <img src={this.state.series.logo} className='series-image' />
                    </Box>
                </div>
                <div className='row'>
                    <h1>{this.state.series.name}</h1>
                </div>
                <div className='row'>
                    {this.state.series.description}
                </div>
                <div className='row'>
                    <h2>Characters</h2>
                </div>
                <div className='row'>

                </div>
                <div className='row'>
                    <h2>Games in series</h2>
                </div>
                <div className='row'>

                </div>
            </div>
        )
    }
}