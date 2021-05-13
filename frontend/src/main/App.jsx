import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

// Dependencies
import React from 'react';

// Components
import Menu from '../templates/menu'
import Todo from '../todo/todo'
import About from '../about/about'

const App = props => {
  return (

    <div className="App">
      <Menu />
      <Todo />
      <About />
    </div>

  )
}

export default App;
