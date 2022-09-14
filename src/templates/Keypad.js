import Key from '../components/Key';
import Enter from '../components/Enter';

const Keypad = ({ setValue, value, setTotalValue, totalValue, multiplier }) => {
	const { currentMultiplier } = multiplier;
	const keys = [
		{ id: '7', value: '7' },
		{ id: '8', value: '8' },
		{ id: '9', value: '9' },
		{ id: '4', value: '4' },
		{ id: '5', value: '5' },
		{ id: '6', value: '6' },
		{ id: '1', value: '1' },
		{ id: '2', value: '2' },
		{ id: '3', value: '3' },
		{ id: '0', value: '0', span: 2 },
	];

	return (
		<div className="bg-slate-50 dark:bg-slate-800/50 p-4 grid grid-cols-3 grid-rows-4 gap-3 w-full mt-auto">
			{keys.map(key => (
				<Key
					key={key.id}
					item={key}
					setValue={setValue}
					value={value}
					currentMultiplier={currentMultiplier}
				/>
			))}
			<Enter
				value={value}
				setValue={setValue}
				totalValue={totalValue}
				setTotalValue={setTotalValue}
				multiplier={multiplier}
			/>
		</div>
	);
};

export default Keypad;
