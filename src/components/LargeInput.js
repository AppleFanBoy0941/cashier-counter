import useCalculations from '../hooks/useCalculations'
import Digit from './Digit'
import FadingLine from './FadingLine'

const LargeInput = ({ id }) => {
	const { values, setNewValue } = useCalculations()
	const currentValue = values.find(item => item.id === id).value
	const dividedValue = currentValue.toString().split('')
	const missingZeros = 3 - dividedValue.length
	const digits = [...Array(missingZeros).fill('0'), ...dividedValue]

	function addNewValue(value, index) {
		const newValue = digits
		newValue[index] = value
		setNewValue(id, newValue.join(''))
		return newValue.join('')
	}

	return (
		<div className='flex justify-center py-4 gap-2'>
			<FadingLine />
			{digits.map((digit, index) => (
				<>
					<Digit
						digit={digit}
						index={index}
						key={index}
						updater={addNewValue}
					/>
					<FadingLine key={`line${index}`} />
				</>
			))}
		</div>
	)
}

export default LargeInput
