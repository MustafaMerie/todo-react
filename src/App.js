import React from 'react';
import './App.css';
import { HeaderToDo } from './components/HeaderToDo';
import ListToDo from './components/ListToDo';


function App() {

  return (
    <div className="container">
      <HeaderToDo />
      <ListToDo />
    </div>
  );
}

export default App;
