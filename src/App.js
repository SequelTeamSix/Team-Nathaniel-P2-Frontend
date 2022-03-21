import {Route} from 'react-router-dom';
import './App.css';

import Character from "./pages/Character";
import Characters from './pages/Characters';
import Serieses from "./pages/Serieses";
import NavBar from "./components/NavBar";
import Series from "./pages/Series";
import Consoles from "./pages/Consoles";
import Console from "./pages/Console";

function App() {
  return (
    <div className="App">
        <NavBar />
        <Route exact path='/series'>
            <Serieses />
        </Route>
        <Route path='/series/:seriesName' component={Series} />
        <Route exact path='/character'>
            <Characters />
        </Route>
        <Route path='/character/:characterName' component={Character} />
        <Route exact path='/console' >
            <Consoles />
        </Route>
        <Route path='/console/:consoleName' component={Console} />


    </div>
  );
}

export default App;
