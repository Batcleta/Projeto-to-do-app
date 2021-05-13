import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

// Dependencies
import React from 'react';

// components
import Menu from '../templates/Menu';
import Routes from './routes'

const App = props => {
  return (

    <div className="App">
      <Menu />
      <Routes /> 
    </div>

  )
};

export default App;
