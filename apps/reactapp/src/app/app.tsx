import React, { Component } from 'react';
import '@reactangular/elements';
import './app.css';

const divStyle = {
  width: '400px'
};

interface MyState {
  counter: number;
}

class App extends Component<{}, MyState> {
  private buttonRef;
  constructor(props) {
    super(props);
    this.state = { counter: 0 };
    this.buttonRef = React.createRef();
  }

  componentDidMount() {
    this.buttonRef.current.addEventListener('addToCart', () =>
      this.setState({ counter: this.state.counter + 1 })
    );
  }

  componentWillUnmount() {
    this.buttonRef.current.removeEventListener('addToCart');
  }

  render() {
    const { counter } = this.state;
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
            <add-to-cart-button type="React" ref={this.buttonRef} />
          </div>
        </div>
      </>
    );
  }
}

export default App;
