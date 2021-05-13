import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

// Dependencies
import React from 'react';

// Components
import Todo from '../todo/todo'
import About from '../about/about'

const App = props => {
  return (

    <div className="App">
      <Todo />
      <About />
    </div>

  )
}

export default App;
