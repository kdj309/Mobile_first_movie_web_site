import './App.css';
import Nav from './Nav'
import Main from './Main'
import Movies from './Movies'
import About from './About'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
function App() {
  return (
    <Router>
    <Switch>
    <div className="App">
    <Route exact path='/'>
    <Nav/>
    <Main/>
    <Movies heading="Popular" popular='https://api.themoviedb.org/3/movie/popular?api_key=eee6a0bb762e357c0fe2e8f12f7ad5f7&language=kn-ln&page=1'/>
    <Movies heading="Toprated" popular='https://api.themoviedb.org/3/movie/top_rated?api_key=eee6a0bb762e357c0fe2e8f12f7ad5f7&language=hi-In&page=1'/>
    <Movies heading="Trending" popular='https://api.themoviedb.org/3/trending/all/day?api_key=eee6a0bb762e357c0fe2e8f12f7ad5f7'/>
    <Movies heading="Best In future" popular='https://api.themoviedb.org/3/movie/upcoming?api_key=eee6a0bb762e357c0fe2e8f12f7ad5f7&language=en-US&page=1'/> 
    </Route>
    <Route exact path='/about'>
     <About></About>
    </Route>
    </div>
    </Switch>
    </Router>
  );
}

export default App;
