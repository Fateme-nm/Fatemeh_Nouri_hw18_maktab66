import React from "react";
import WhitCheckingLogin from "./components/HOC/WhitCheckingLogIn";
import './App.css'

function App({name, handleLogOut}) {
  console.log("App rendering...")
    return (
      <div className="App">
        <div className="helloUser">
          <h1>سلام {name}</h1>
          <button onClick={handleLogOut}>خروج از حساب</button>
        </div>
      </div>
    )
}

export default WhitCheckingLogin(App);
