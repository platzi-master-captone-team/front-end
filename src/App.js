import './App.css';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Search from './pages/Search/Search';
import RegisterExpert from './pages/Register/RegisterExpert';
import RegisterUser from './pages/Register/RegisterUser';
import Login from './pages/Login/Login';
import SignUp from './pages/SignUp/SignUp';
import LandingPage from './pages/LandingPage/LandingPage';
import Navbar from './components/Navbar/Navbar';
import GlobalStyles from './GlobalStyles';

function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Navbar />
      <Switch>
        <Route exact path="/" component={LandingPage} ></Route>
        <Route exact path="/search" component={Search} ></Route>
        <Route exact path="/login" component={Login} ></Route>
        <Route exact path="/signup" component={SignUp} ></Route>
        <Route exact path="/registro/experto" component={RegisterExpert} ></Route>
        <Route exact path="/registro/usuario" component={RegisterUser} ></Route>
      </Switch>
  </BrowserRouter>
  );
}

export default App;
