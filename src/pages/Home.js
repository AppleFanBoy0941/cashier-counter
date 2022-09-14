import Keypad from '../templates/Keypad';
import Counter from '../templates/Counter';
import Statusbar from '../templates/Statusbar';
import multipliers from '../assets/multipliers';
import { useState } from 'react';

const Home = () => {
	const [totalValue, setTotalValue] = useState(0);
	const [currentMultiplier, setCurrentMultiplier] = useState(multipliers[0]);

	return (
		<div>
			<div className="fixed bottom-0 z-0">
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
	);
};

export default Home;
