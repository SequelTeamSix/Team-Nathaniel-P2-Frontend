import * as React from "react";
import Box from "../components/Box";
import './Series.css';

export default class Series extends React.Component {
    constructor(props) {
        super(props);
        this.state = {width: 0,
            series: {name: '', description: '', image: ''}};
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
                        <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Super_Mario_Bros._Logo.svg/800px-Super_Mario_Bros._Logo.svg.png?20140516002826' className='series-image' />
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