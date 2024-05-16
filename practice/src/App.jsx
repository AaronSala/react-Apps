
import React, { useState } from "react";
import './App.css'
import Starts from './components/Start'




function App() {
  function buttonClicked(number){
    console.log("the button was clicked")
   }

  return (
    <div className="App">
      <Starts label="userName" id="user" buttonClick={ buttonClicked} />
      <Starts label="submit" id="submit" />

    </div>
  );
}

export default App

