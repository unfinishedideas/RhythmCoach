import React from "react";
// import ToneTest from './components/ToneTest';
import ToneEngine from "./components/ToneEngine";

function App() {
  return (
    <div>
      <h1 style={heroTextStyle}>The Rhythm Coach</h1>
      <ToneEngine />
      {/* <ToneTest/> */}
    </div>
  );
}

const heroTextStyle = {
  textAlign: 'center',
  color: 'white',
  fontSize: '50px',

}

export default App;
