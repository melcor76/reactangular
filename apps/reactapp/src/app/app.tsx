import React, { useState, useRef, useEffect } from 'react';
import '@reactangular/elements';
import './app.css';

const divStyle = {
  width: '400px'
};

interface MyState {
  counter: number;
}

const App = () => {
  const [counter, setCounter] = useState(0);
  const buttonRef = useRef(null);

  useEffect(() => {
    const handleEvent = () => setCounter(counter + 1);
    buttonRef.current.addEventListener('addToCart', handleEvent);
    return () => {
      buttonRef.current.removeEventListener('addToCart', handleEvent);
    };
  }, [counter]);

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
          <add-to-cart-button type="React" ref={buttonRef} />
        </div>
      </div>
    </>
  );
};

export default App;
