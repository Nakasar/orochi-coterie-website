import React, { Component } from 'react';
import OrochiColor from './resources/images/orochi_color.png';

class App extends Component {
  render() {
    return (
      <div style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '100vh' }}>
        <img src={OrochiColor} alt="Côterie Orochi" style={{ height: '40vmin' }}/>
        <h1 style={{ fontFamily: 'New-Krytan' }}>Côterie Orochi</h1>
      </div>
    );
  }
}

export default App;
