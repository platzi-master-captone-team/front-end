import './App.css';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

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
      </Switch>
  </BrowserRouter>
  );
}

export default App;
