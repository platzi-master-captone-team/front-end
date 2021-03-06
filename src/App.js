import './App.css';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Search from './pages/Search/Search';
import { BannerProvider } from './utils/bannerStatus';
import { LoginProvider } from './utils/loginStatus';
import RegisterExpert from './pages/Register/RegisterExpert';
import RegisterUser from './pages/Register/RegisterUser';
import ProfileInfo from './pages/ProfileInfo/ProfileInfo'
import Login from './pages/Login/Login';
import SignUp from './pages/SignUp/SignUp';
import LandingPage from './pages/LandingPage/LandingPage';
import Profile from './pages/Profile/Profile';
import ProtectedRoute from './components/ProtectedRoutes/ProtectedRoute';
import Payment from './pages/Payment/Payment';
import Chat from './pages/Chat/Chat';

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
        <Route exact path="/buscar" component={Search} ></Route>
        <Route exact path="/login" component={Login} ></Route>
        <Route exact path="/signup" component={SignUp} ></Route>
        <Route exact path="/registro/experto" component={RegisterExpert} ></Route>
        <Route exact path="/registro/usuario" component={RegisterUser} ></Route>
        <ProtectedRoute exact path="/experto/:id" component={ProfileInfo} ></ProtectedRoute>
        <ProtectedRoute path="/profile" component={Profile} ></ProtectedRoute>
        <Route exact path="/experto" component={ProfileInfo} ></Route>
        <Route exact path="/pago" component={Payment} ></Route>
        <Route path="/chat/:id" component={Chat} ></Route>
        <Route path="/profile" component={Profile} ></Route>
      </Switch>
  </BrowserRouter>
  </BannerProvider>
  </LoginProvider>
  );
}

export default App;
