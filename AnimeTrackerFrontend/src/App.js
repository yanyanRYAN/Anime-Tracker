import React from 'react';
//import "bootstrap/dist/css/bootstrap.min.css";
import Nav from './components/nav/nav.component';
import Home from './components/home/home.component';
import Anime from './components/anime/anime.component';
import Profile from './components/profile/profile.component';
import AnimePage from './components/anime/anime.page.component';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';


function App() {
  return (
    <Router>
      <div className="App">
      <Nav />
      <Switch>
        <Route path="/" exact component={Home}  />
        <Route path="/anime/list" component={Anime} />
        <Route path="/anime/page/:id" exact component={AnimePage} />
        <Route path="/profile" component={Profile} />
      </Switch>
      
      
    </div>
    </Router>
    
  );
}

export default App;
