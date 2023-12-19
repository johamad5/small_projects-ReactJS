import './App.css';
import fccLogo from './img/fcc-logo.png'
import Button from './componentes/button.jsx';
import Counter from './componentes/counter.jsx';
import { useState } from 'react';

function App() {

  const [ num, setNum ] = useState(0);

  const handleClickMore = () => {
   setNum(num + 1)
  };

  const handleClickLess = () => {
    setNum(num - 1)
   };

  const resetCounter = () => {
    setNum(0)
   };

  return (
    <div className='App'>
      <div className='freecodecamp-logo'>
        <img className='freecodecamp-img' src={fccLogo} alt='logo'/>
      </div>
      <div className='cnt-contador'>
        <Counter number={num} />
        <div className='cont-btnClicks'>
          <Button text='+' btnClick={true} handleClick={handleClickMore} />
          <Button text='-' btnClick={true} handleClick={handleClickLess} />
        </div>
        <Button text='Reset' btnClick={false} handleClick={resetCounter} />
      </div>
    </div>
  );
}

export default App;
