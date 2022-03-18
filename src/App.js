import {Route} from 'react-router-dom';
import './App.css';

import Character from "./pages/Character";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="App">
        <NavBar />
        <Route path='/character'>
            <Character />
        </Route>

    </div>
  );
}

export default App;
