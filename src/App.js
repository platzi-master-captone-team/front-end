import './App.css';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import LandingPage from './pages/LandingPage';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={LandingPage} ></Route>
      </Switch>
  </BrowserRouter>
  );
}

export default App;
