import React from 'react';
import logo from './logo.svg';
import './App.css';

const App=()=> {
  return (
    <>
    <div className="main_div">
    <div className="center_div">
    <br/>
    <h1>ToDo list</h1><br/>
    <input type="text" placeholder="Add item"/>
<button>+</button>

<ol>
<li>buy apple</li>
</ol>
    </div>
    </div>
    </>
  );
}

export default App;
