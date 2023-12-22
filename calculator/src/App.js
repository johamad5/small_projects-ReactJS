import './App.css';
import fccLogo from './img/fcc-logo.png';
import Button from './components/button.jsx';
import Screen from './components/screen.jsx';
import CleanButton from './components/cleanButton.jsx';
import { useState } from 'react';
import { evaluate } from 'mathjs';

function App() {
	const [input, setInput] = useState('');

	const updateInput = (value) => {
		setInput(input + value);

		if (input !== ' ' && input.length >= 20) {
			alert('Máxima cantidad de valores alcanzado.');
		}

		if (isNaN(value) && value !== ',') {
			let lastValue = input.slice(input.length - 1, input.length + 1);
			if (isNaN(lastValue) && value !== ',') {
				let lastInput = input.slice(0, input.length - 1);
				setInput(lastInput + value);
			}
		}
	};

	const cleanOne = () => {
		let lastValue = input.slice(0, input.length - 1);
		setInput(lastValue);
	};

	const calculateResult = () => {
		if (input) {
			setInput(evaluate(input));
		} else {
			alert('Ingresa valores para realizar los calculos. ');
		}
	};

	return (
		<div className="App">
			<div className="cont-fcc-logo">
				<img src={fccLogo} className="fcc-img" alt="logo" />
			</div>
			<div className="cont-calculator">
				<Screen input={input} />
				<div className="row">
					<CleanButton handleClean={() => setInput('')}>AC</CleanButton>
					<CleanButton handleClean={() => cleanOne()}>C</CleanButton>
				</div>
				<div className="row">
					<Button handleClick={updateInput}>7</Button>
					<Button handleClick={updateInput}>8</Button>
					<Button handleClick={updateInput}>9</Button>
					<Button handleClick={updateInput}>+</Button>
				</div>
				<div className="row">
					<Button handleClick={updateInput}>4</Button>
					<Button handleClick={updateInput}>5</Button>
					<Button handleClick={updateInput}>6</Button>
					<Button handleClick={updateInput}>-</Button>
				</div>
				<div className="row">
					<Button handleClick={updateInput}>1</Button>
					<Button handleClick={updateInput}>2</Button>
					<Button handleClick={updateInput}>3</Button>
					<Button handleClick={updateInput}>*</Button>
				</div>
				<div className="row">
					<Button handleClick={calculateResult}>=</Button>
					<Button handleClick={updateInput}>0</Button>
					<Button handleClick={updateInput}>,</Button>
					<Button handleClick={updateInput}>/</Button>
				</div>
			</div>
		</div>
	);
}

export default App;
