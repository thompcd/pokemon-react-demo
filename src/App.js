import './App.css';
import Pokemon from './components/Pokemon';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <div className='color-container'>
      <Router>
        <Switch>
            <Route exact path="/">
          2    <Redirect to="/pokemon/25" />
          3</Route>
            <Route path='/pokemon/:id' render={(props) => <Pokemon {...props} />} />
        </Switch>
      {/* next / last buttons */}
      </Router>
      </div>
    </div>
  );
}

export default App;
