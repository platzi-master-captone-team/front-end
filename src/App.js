import './App.css';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import LandingPage from './pages/LandingPage';
import FindExpert from './pages/FindExpert/FindExpert'
import RegisterExpert from './pages/Register/RegisterExpert'
import RegisterUser from './pages/Register/RegisterUser';
import Login from './pages/Login/Login';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={LandingPage} ></Route>
        <Route exact path="/encontrar-experto" component={FindExpert} ></Route>
        <Route exact path="/login" component={Login} ></Route>
        <Route exact path="/registro/experto" component={RegisterExpert} ></Route>
        <Route exact path="/registro/usuario" component={RegisterUser} ></Route>
      </Switch>
  </BrowserRouter>
  );
}

export default App;
