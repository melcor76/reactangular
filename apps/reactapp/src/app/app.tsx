import React, { useState, useEffect } from 'react';

import './app.css';

const divStyle = {
  width: '300px'
};

export const App = () => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    document.querySelector('#addButton').addEventListener('addToCart', e => {
      setCounter(counter + 1);
    });
  });

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
        <shopping-cart counter={counter} />
      </header>
      <div>
        <img src="../assets/react.png" alt="Avatar" width="300" />
        <add-to-cart-button id="addButton" type="React" />
      </div>
    </>
  );
};

export default App;
