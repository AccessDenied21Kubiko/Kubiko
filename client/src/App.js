import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Login from './components/Login';
import Nav from './components/Nav';
import Register from './components/Register';

function App() {
  return (
    <Router>
      <Nav />
      <Route exact path='/' />

      <Route path="/login" exact component={Login} />
      <Route path="/register" exact component={Register} />

    </Router>
  );
}

export default App;
