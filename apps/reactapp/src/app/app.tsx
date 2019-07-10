import React from 'react';

import './app.css';

const divStyle = {
  width: '300px'
};

export const App = () => {
  return (
    <>
      <header className="header">
        <div style={divStyle}>
          <a href="http://localhost:4200">
            <img
              src="../assets/angular.png"
              alt="Angular"
              width="40"
              height="40"
            />
          </a>
          <img src="../assets/react.png" alt="React" width="40" height="40" />
        </div>
        <shopping-cart counter={0} />
      </header>
      <div>
        <img src="../assets/react.png" alt="Avatar" width="300" />
        <add-to-cart-button type="React" />
      </div>
    </>
  );
};

export default App;
