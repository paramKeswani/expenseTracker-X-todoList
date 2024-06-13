import React from 'react';
import Card from './card';
import './App.css';
import TextComponent from './textComp';
import DynamicDemo from './progressBar';

const App = () => {
  return (
    <div className="App d-flex flex-column justify-content-end vh-100 p-3">
      <DynamicDemo/>
      <TextComponent text="FINANCE MADE EASY!"/>
      <Card />
    </div>
  );
}

export default App;
