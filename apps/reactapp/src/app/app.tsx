import React, { useState, useEffect } from 'react';

import './app.css';

const divStyle = {
  width: '400px'
};

export const App = () => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    console.log('useEffect');
    const handleEvent = () => setCounter(counter + 1);
    document
      .querySelector('#addButton')
      .addEventListener('addToCart', handleEvent);

    return () => {
      document
        .querySelector('#addButton')
        .addEventListener('addToCart', handleEvent);
    };
  });

  return (
    <>
      <header className="flex-row">
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
      <div className="flex-row">
        <img src="../assets/react.png" alt="Avatar" width="150" />
        <div>
          <table>
            <thead>
              <tr>
                <th>Product</th>
                <th>Type</th>
                <th>Features</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>React</td>
                <td>Library</td>
                <td>JSX, Hooks</td>
              </tr>
            </tbody>
          </table>
          <add-to-cart-button id="addButton" type="React" />
        </div>
      </div>
    </>
  );
};

export default App;
