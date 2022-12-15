import React, { useState } from 'react';
import data from './data/data.json';

import Header from './components/Header';
import './App.css';

function App() {

  const [ toDoList, setToDoList ] = useState(data);

  return (
    <div className="App">
      <Header />
    </div>
  );
}

export default App;
