import React from 'react';

import './app.css';

export const App = () => {
  return (
    <div>
      <header style={{ textAlign: 'center' }}>
        <h1>Welcome to reactapp!</h1>
        <img
          width="450"
          src="https://raw.githubusercontent.com/nrwl/nx/master/nx-logo.png"
        />
      </header>
      <p>
        This is a React app built with <a href="https://nx.dev">Nx</a>.
      </p>
      <p>🔎 **Nx is a set of Angular CLI power-ups for modern development.**</p>
      <h2>Quick Start & Documentation</h2>
      <ul>
        <li>
          <a href="https://nx.dev/getting-started/what-is-nx">
            30-minute video showing all Nx features
          </a>
        </li>
        <li>
          <a href="https://nx.dev/tutorial/01-create-application">
            Interactive tutorial
          </a>
        </li>
      </ul>
    </div>
  );
};

export default App;
