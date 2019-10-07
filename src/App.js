import React from 'react';
import logo from 'logo.svg';
import 'App.css';
import Container from 'components/Container';

function App() {
  return (
    <div className="App">
      <Container text="WEBPACK">
        <div>
          React with Webpack
        </div>
        <img src={logo} className="App-logo" alt="logo" />
      </Container>
    </div>
  );
}

export default App;
