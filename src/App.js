import './App.css';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { BannerProvider } from './utils/bannerStatus';
import { LoginProvider } from './utils/loginStatus';

import FindExpert from './pages/FindExpert/FindExpert';
import RegisterExpert from './pages/Register/RegisterExpert';
import RegisterUser from './pages/Register/RegisterUser';
import Login from './pages/Login/Login';
import SignUp from './pages/SignUp/SignUp';
import LandingPage from './pages/LandingPage/LandingPage';
import Profile from './pages/Profile/Profile';

import Navbar from './components/Navbar/Navbar';
import Banner from './components/Banner/Banner';

import GlobalStyles from './GlobalStyles';

function App() {
  return (
    <LoginProvider >
    <BannerProvider >
    <BrowserRouter>
      <GlobalStyles />
      <Navbar />
      <Banner />
      <Switch>
        <Route exact path="/" component={LandingPage} ></Route>
        <Route exact path="/search" component={FindExpert} ></Route>
        <Route exact path="/login" component={Login} ></Route>
        <Route exact path="/signup" component={SignUp} ></Route>
        <Route exact path="/registro/experto" component={RegisterExpert} ></Route>
        <Route exact path="/registro/usuario" component={RegisterUser} ></Route>
        <Route path="/profile" component={Profile} ></Route>
      </Switch>
  </BrowserRouter>
  </BannerProvider>
  </LoginProvider>
  );
}

export default App;
