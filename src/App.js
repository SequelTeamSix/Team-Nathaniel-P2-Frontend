import {Route, Redirect} from 'react-router-dom';
import './App.css';

import Character from "./pages/Character";
import Characters from './pages/Characters';
import Serieses from "./pages/Serieses";
import NavBar from "./components/NavBar";
import Series from "./pages/Series";
import Consoles from "./pages/Consoles";
import Console from "./pages/Console";
import Register from './pages/Register';
import Login from './pages/Login';

import AllGames from "./pages/AllGames";
import Game from "./pages/Game";
import Home from "./pages/Home";
import ShoppingCart from "./pages/ShoppingCart";

function App() {
  return (
    <div className="App">
        <NavBar />

        {/* Adding landing page - PV*/}
        <Route exact path="/"
                render={() => {
                    return (
                      <Redirect to="/home" /> 
                    )
                }}
        />

        <Route exact path='/home'>
            <Home />
        </Route>
        {/****************************/}

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

        <Route exact path='/game'>
            <AllGames />
        </Route>

        <Route path='/game/:gameName'>
            <Game />
        </Route>
        <Route path='/login'>
            <Login />
        </Route>

        <Route path='/register' >
            <Register />
        </Route>

        <Route path='/shoppingCart' >
            <ShoppingCart />
        </Route>

    </div>
  );
}

export default App;
