import React from 'react'
import logo from './pikachu.png';
import '../App.css';

export default function Logo() {
    return (
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="pikachu" />
          </header>
          <header className='App-body'>
          <p>1 - Na casa em que você vive com sua família, nos cômodos em que a luzes ficam acesas por mais de 4 horas, as lâmpadas são econômicas(led)? (Sim ou não)</p>
          <p>2 - Quando você toma banho, você demora mais do que 10 minutos?(Sim ou não)</p>
          <p>3 - Você deixa a torneira aberta ao escovar os dentes? (Sim ou não)</p>
          <p>4 - Na casa ou prédio em que você vive com sua família, a calçada é limpa com vassoura ao invés de água? (Sim ou não)</p>
          <p>5 - Você e sua família dão preferência às frutas e verduras da estação?(Sim ou não) </p>
          </header>
        </div>
      );
}
