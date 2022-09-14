import Keypad from './templates/Keypad';
import Counter from './templates/Counter';
import { useState } from 'react';
import Statusbar from './templates/Statusbar';
import multipliers from './assets/multipliers';
import { ValuesContext } from './contexts/values';

function App() {
	const [values, setValues] = useState([
		{ id: '1000s', value: '', multiplier: 1000 },
		{ id: '500s', value: '', multiplier: 500 },
		{ id: '200s', value: '', multiplier: 200 },
		{ id: '100s', value: '', multiplier: 100 },
		{ id: '50s', value: '', multiplier: 50 },
		{ id: '20m', value: '', multiplier: 20 },
		{ id: '10m', value: '', multiplier: 10 },
		{ id: '5m', value: '', multiplier: 5 },
		{ id: '2m', value: '', multiplier: 2 },
		{ id: '1m', value: '', multiplier: 1 },
		{ id: '05m', value: '', multiplier: 0.5 },
		{ id: '400b', value: '', multiplier: 400 },
		{ id: '200b', value: '', multiplier: 200 },
		{ id: '100b', value: '', multiplier: 100 },
		{ id: '50b', value: '', multiplier: 50 },
		{ id: '25b', value: '', multiplier: 25 },
		{ id: '20b', value: '', multiplier: 20 },
	]);
	// const [value, setValue] = useState('');
	const [totalValue, setTotalValue] = useState(0);

	const [currentMultiplier, setCurrentMultiplier] = useState(multipliers[0]);
	return (
		<ValuesContext.Provider value={{ values, setValues }}>
			<div className="App flex flex-col">
				<div className="fixed bottom-0">
					<Counter
						// value={value}
						// setValue={setValue}
						multiplier={{
							multipliers,
							currentMultiplier,
							setCurrentMultiplier,
						}}
					/>
					<Statusbar
						totalValue={totalValue}
						setTotalValue={setTotalValue}
						multiplier={{
							multipliers,
							currentMultiplier,
							setCurrentMultiplier,
						}}
					/>
					<Keypad
						// setValue={setValue}
						// value={value}
						totalValue={totalValue}
						setTotalValue={setTotalValue}
						multiplier={{
							multipliers,
							currentMultiplier,
							setCurrentMultiplier,
						}}
					/>
				</div>
			</div>
		</ValuesContext.Provider>
	);
}

export default App;
