import {Route} from 'react-router-dom';
import './App.css';

import Character from "./pages/Character";
import NavBar from "./components/NavBar";

/* Importing AllGames & Game- PV 3/18/22 */
import AllGames from "./pages/AllGames";
import Game from "./pages/Game";

function App() {
  return (
    <div className="App">
        <NavBar />
        <Route path='/character'>
            <Character />
        </Route>

        {/**********************************************************************/}
        {/* Adding all games page - PV 3/19/22 */}
        <Route path='/allgames'>
            <AllGames />
        </Route>
        {/**********************************************************************/}

        {/**********************************************************************/}
        {/* Testing single game page - PV 3/20/22 */}
        <Route path='/game'>
            <Game />
        </Route>
        {/**********************************************************************/}

    </div>
  );
}

export default App;
