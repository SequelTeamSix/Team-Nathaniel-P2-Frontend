import * as React from "react";
import Box from "../components/Box";
import "./Characters.css";
import { Link } from "react-router-dom";

export default class Characters extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
        characters: [],
    };
  }

  componentDidMount() {
    fetch(
      "https://teamnathanielrevatureproject2.azurewebsites.net/getAllCharacters"
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        this.setState({ characters: data });
      });
  }

  render() {
    return (
      <div className="container vh-100">
        <div className="row d-flex justify-content-center">
          {this.state.characters.map((character) => (
            <Link
              key={character.characterId}
              className="col-6 col-md-4 col-lg-2"
              to={"/character/" + character.characterName}
            >
              <Box className='chars-box'>
                <img src={character.image} className="chars-image" />
                <span className="chars-name">{character.characterName}</span>
              </Box>
            </Link>
          ))}
        </div>
      </div>
    );
  }
}
