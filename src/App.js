import './App.css';
import Pokemon from './components/Pokemon';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path='/pokemon/:id' render={(props) => <Pokemon {...props} />} />
        </Switch>
      {/* next / last buttons */}
      </Router>

    </div>
  );
}

export default App;
