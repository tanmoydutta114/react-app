import logo from './logo.svg';
import './App.css';
import { Basic_form } from './components/forms/basic_form';
import { useState, useEffect } from 'react';
import { FetchData } from "./components/forms/FetchData";


function App() {
  return (
    <div className="App">
      <Basic_form />
      {/* <FetchData /> */}
    </div>
  );
}

export default App;
