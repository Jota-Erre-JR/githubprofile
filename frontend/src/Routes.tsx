import { BrowserRouter, Switch, Route } from 'react-router-dom';

import CepSearch from 'pages/GitSearch';
import Navbar from 'components/Navbar';
import Home from 'pages/Home';

const Routes = () => (
  <BrowserRouter>
    <Navbar />
    <Switch>
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/profile">
        <CepSearch />
      </Route>
    </Switch>
  </BrowserRouter>
);

export default Routes;
