import './App.css';
import Pokemon from './components/Pokemon';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <div className='poke-outline'>
            <Route path='/pokemon/:id' render={(props) => <Pokemon {...props} />} />
          </div>
        </Switch>
      {/* next / last buttons */}
      </Router>
    </div>
  );
}

export default App;
