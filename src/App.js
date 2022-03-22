import './App.css';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import PageNavigation from './components/PageNavigation/PageNavigation';
import Home from './views/Home/Home';
import Bunnies from './views/Bunnies/Bunnies';
import Characters from './views/Characters/Characters';
import Workshops from './views/Workshops/Workshops';

function App() {
  return (
    <BrowserRouter>
      <PageNavigation />
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/bunnies">
          <Bunnies />
        </Route>
        <Route path="/characters">
          <Characters />
        </Route>
        <Route path="/workshops">
          <Workshops />
        </Route>
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
