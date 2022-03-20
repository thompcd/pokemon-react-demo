import './App.css';
import Pokemon from './components/Pokemon';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <div className='poke-outline'>
            <Route exact path="/">
          2    <Redirect to="/pokemon/25" />
          3</Route>
            <Route path='/pokemon/:id' render={(props) => <Pokemon {...props} />} />
          </div>
        </Switch>
      {/* next / last buttons */}
      </Router>
    </div>
  );
}

export default App;
