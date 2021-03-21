import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import courseCard from "./components/courseCard";
import createQuiz from './components/createQuiz';
import Home from './components/Home';
import Login from './components/Login';
import Nav from './components/Nav';
import Register from './components/Register';

function App() {
  return (
    <Router>
      <Nav />
      <Route exact path='/' render={(props) => (
        <>
          <Home />
        </>
      )} />

      <Route path="/login" exact component={Login} />
      <Route path="/register" exact component={Register} />
      <Route path="/student" exact component={courseCard} />
      <Route path="/quizCreate" exact component={createQuiz} />

    </Router>
  );
}

export default App;
