import "./Character.css";

import Box from "../components/Box";
import * as React from "react";

import { Link } from "react-router-dom";

export default class Character extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      character: {
        characterName: "",
        description: "",
        image: "",
        catchPhrase: "",
      },
      series: [],
    };
  }

  componentDidMount = () => {
    let name = this.props.match.params.characterName;
    fetch(
      "https://teamnathanielrevatureproject2.azurewebsites.net/characterName/" +
        name
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        this.setState({ character: data });
        this.setState({ series: data.series });
      });
  };

  render() {
    window.addEventListener("resize", this.changeSize);

    return (
      <div className="container">
        <div className="row">
          <Box className="col-12 col-md-4 ">
            <img src={this.state.character.image} className="character-image" />
          </Box>
          <div className="col-12 col-md-8 d-flex align-items-center">
            <div>
              <h1 className="name-content">
                {this.state.character.characterName}
              </h1>
              <h2 className="name-content">
                {this.state.character.catchPhrase}
              </h2>
            </div>
          </div>
        </div>

        <div className="row">
          <p>Description:</p>
          {this.state.character.description}
        </div>
        <div className="row">
          <h2>Series</h2>
          <div className="row">
            {this.state.series.map((series) => (
              <Link
                key={series.seriesId}
                className="col-12 col-sm-6 col-md-3 mt-4 link-decoration"
                to={"/series/" + series.name}
              >
                <Box className="d-flex flex-column justify-content-end align-items-center character-box">
                  <img src={series.logo} className="series-image" />
                  <span className="mt-2">{series.seriesName}</span>
                </Box>
              </Link>
            ))}
          </div>
        </div>
      </div>
    );
  }
}
