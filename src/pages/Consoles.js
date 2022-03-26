import * as React from "react";
import Box from "../components/Box";
import { Link } from "react-router-dom";
import "./Consoles.css";


export default class Consoles extends React.Component {
  constructor(props) {
    super(props);
    this.state = { consoles: [] };
  }

  componentDidMount() {
    fetch(
      "https://teamnathanielrevatureproject2.azurewebsites.net/getAllConsoles"
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        this.setState({ consoles: data });
      });
  }

  render() {
    return (
      <div className="container vh-100">
        <div className="row">
          {this.state.consoles.map((console) => (
            <Link
              key={console.consoleId}
              className="col-12 col-md-4 col-lg-4 console-link"
              to={"/console/" + console.consoleName}
            >
              <Box className="cons-box d-flex flex-column justify-content-center">
                <img src={console.picture} className="cons-image" />
                {console.consoleName}
              </Box>
            </Link>
          ))}
        </div>
      </div>
    );
  }
}
