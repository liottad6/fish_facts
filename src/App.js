import './styles.css';
import { animals } from './animals';
import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';

const title = "";
const background = <img className="background" alt="ocean" src="./images/ocean.jpg"/>;
var showBackground = true;

var images = [];
for(var animal in animals){
  images.push(<img key={animal} className='animal' alt={animal} onClick={displayFact}
    src={animals[animal].image} aria-label={animal} role='button'/>);
};

console.log(images);

const animalFacts = (
  <div>
    <h1>{title ? "" : "Click an animal for a fun fact"}</h1>
    {showBackground ? background : null}
    <div className="animals">
      {images}
    </div>
    <p id="fact"></p>
  </div>);


function App() {
  return (
    <div className="App">
      <header className="App-header">
        {animalFacts}
      </header>
    </div>
  );
}

function displayFact(e){
  var name = e.target.alt;
  var randy = Math.floor(Math.random() * animals[name].facts.length);
  var choice = animals[name].facts[randy];
  document.getElementById('fact').innerHTML = choice;
}

ReactDOM.render(<App />, document.getElementById('root'));
reportWebVitals();