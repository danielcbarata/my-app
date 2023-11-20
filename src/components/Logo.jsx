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
          <p>1 - Na casa em que você vive com sua família, nos cômodos em que a luzes ficam acesas por mais de 4 horas, as lâmpadas são econômicas(led)? <button className='Botao' id='sim-1'>Sim</button> <button className='Botao' id='nao-1'>Não</button></p>
          <p>2 - Quando você toma banho, você demora mais do que 10 minutos?<button className='Botao' id='sim-2'>Sim</button> <button className='Botao' id='nao-2'>Não</button></p>
          <p>3 - Você deixa a torneira aberta ao escovar os dentes? <button className='Botao' id='sim-3'>Sim</button> <button className='Botao' id='nao-3'>Não</button></p>
          <p>4 - Na casa ou prédio em que você vive com sua família, a calçada é limpa com vassoura ao invés de água? <button className='Botao' id='sim-4'>Sim</button> <button className='Botao' id='nao-4'>Não</button></p>
          <p>5 - Você e sua família dão preferência às frutas e verduras da estação?<button className='Botao' id='sim-5'>Sim</button> <button className='Botao' id='nao-5'>Não</button> </p>
          <p>6 - Você e sua família consomem produtos orgânicos? <button className='Botao' id='sim-6'>Sim</button> <button className='Botao' id='nao-6'>Não</button></p>
          <p>7 -  Você e sua família fazem a separação dos materiais recicláveis? <button className='Botao' id='sim-7'>Sim</button> <button className='Botao' id='nao-7'>Não</button></p>
          <p>8 - Quando fazem compras, você e sua família dão preferência a materiais com embalagens recicláveis?<button className='Botao' id='sim-8'>Sim</button> <button className='Botao' id='nao-8'>Não</button></p>
          <p>9 - Quando você não está usando aparelhos eletrônicos você os desliga? <button className='Botao' id='sim-9'>Sim</button> <button className='Botao' id='nao-9'>Não</button></p>
          <p>10 - Você costuma utilizar o verso das folhas de papéis já utilizadas? <button className='Botao' id='sim-1'>Sim</button> <button className='Botao' id='nao-10'>Não</button></p>
          </header>
        </div>
      );
}
