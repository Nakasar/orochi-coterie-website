import React from 'react';
import { useNetlifyIdentity } from 'react-netlify-identity';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

import IdentityContext from './stores/contexts/Identity/Identity.context';
import { Button } from './components/core/ui/buttons';

import OrochiColor from './resources/images/orochi_color.png';

function App() {
  const identity = useNetlifyIdentity('https://coterie.orochi.eu/.netlify/identity');
  return (
    <IdentityContext.Provider value={identity}>
      <Router>
        <Switch>
          <Route path="/" exact>
            <div style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '100vh' }}>
              <img src={OrochiColor} alt="Côterie Orochi" style={{ height: '40vmin' }}/>
              <h1 style={{ fontFamily: 'New-Krytan' }}>Côterie Orochi</h1>
              <Link to="/externe"><Button text="Réseau externe" variant="outlined" color="primary" /></Link>
              <Link to="/interne"><Button text="Réseau interne" variant="outlined" color="primary" /></Link>
            </div>
          </Route>
          <Route>
            <div style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '100vh' }}>
              <img src={OrochiColor} alt="Côterie Orochi" style={{ height: '40vmin', color: 'red' }}/>
              <h1 style={{ fontFamily: 'New-Krytan', color: 'red' }}>ERREUR 404</h1>
              <p style={{ color: 'red' }}>Resource non existante dans le réseau</p>
              <Link to="/"><Button text="Retour" variant="outlined" color="error" /></Link>
            </div>
          </Route>
        </Switch>
      </Router>
    </IdentityContext.Provider>
  );
}

export default App;
