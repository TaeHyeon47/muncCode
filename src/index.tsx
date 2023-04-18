import React from 'react';
import ReactDOM from 'react-dom/client';

const App = () => {
  return <h1>hi</h1>;
};

// ReactDOM.render(<App />, document.querySelector('#root'));

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
