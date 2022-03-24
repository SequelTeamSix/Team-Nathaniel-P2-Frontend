import * as React from "react";
import Box from "../components/Box";
import "./Series.css";

import { Link } from "react-router-dom";

export default class Series extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      width: 0,
      series: { name: "", description: "", image: "", logo: "" },
      characters: [],
      games: []
    };
  }

  componentDidMount = () => {
    let name = this.props.match.params.seriesName;
    fetch(
      "https://teamnathanielrevatureproject2.azurewebsites.net/SeriesName/" +
        name
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        this.setState({ series: data });
        this.setState({ characters: data.character });
        this.setState({ games: data.game});
      });
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <Box>
            <img src={this.state.series.logo} className="series-image" />
          </Box>
        </div>
        <div className="row">
          <h1>{this.state.series.name}</h1>
        </div>
        <div className="row">{this.state.series.description}</div>
        <div className="row">
          <h2>Characters</h2>
          <div className="row">
            {this.state.characters.map((character) => (
              <Link
                key={character.characterId}
                className="col-12 col-sm-6 col-md-3 mt-4 link-decoration"
                to={"/character/" + character.characterName}
              >
                <Box className="d-flex flex-column justify-content-end align-items-center character-box">
                  <img src={character.image} className="character-image" />
                  <span className="mt-2">{character.characterName}</span>
                </Box>
              </Link>
            ))}
          </div>
        </div>
      
        <div className="row">
          <h2>Games in series</h2>
        </div>
        <div className="row">
            {this.state.games.map((game) => (
              <Link
                key={game.gameId}
                className="col-12 col-sm-6 col-md-3 mt-4 link-decoration"
                to={"/game/" + game.title}
              >
                <Box className="d-flex flex-column justify-content-end align-items-center character-box">
                  <img src={game.boxArt} className="character-image" />
                  <span className="mt-2">{game.title}</span>
                </Box>
              </Link>
            ))}
          </div>
      
      </div>
    );
  }
}
