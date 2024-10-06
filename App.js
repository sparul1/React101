import React from 'react';
import ReactDOM from 'react-dom/client';

// Two lines requiored tp render
// get the root element
const App = ()=>{
return (<h1>
    This is our application!
  </h1>)
}

const reactRoot = ReactDOM.createRoot(document.getElementById("root"))
reactRoot.render(<App/>)