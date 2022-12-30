import FeatherIcon from 'feather-icons-react'
import { motion, AnimatePresence } from 'framer-motion'
import useCalculations from '../hooks/useCalculations'
import { useState } from 'react'

const DeleteKey = ({ id }) => {
	const { values, setNewValue } = useCalculations()
	const currentValue = values.find(item => item.id === id).value

	const [dragProgress, setDragProgress] = useState(0)

	return (
		<div className='w-12 h-12 relative flex justify-center items-center'>
			<AnimatePresence>
				{currentValue !== '' && (
					<motion.button
						drag='x'
						dragConstraints={{ left: -48, right: 0 }}
						dragSnapToOrigin={true}
						dragElastic={0.1}
						onDrag={(e, info) => {
							setDragProgress(
								info.offset.x / -48 > 1
									? 100
									: info.offset.x / -48 < 0
									? 0
									: (info.offset.x / -48) * 100
							)
						}}
						onDragEnd={() => {
							if (dragProgress === 100) {
								setNewValue(id, '')
							}
							setDragProgress(0)
						}}
						initial={{
							opacity: 0,
							scale: 0.9,
							filter: 'blur(2px)',
						}}
						animate={{
							opacity: 1,
							scale: 1,
							filter: 'blur(0px)',
							transition: {
								delay: 0.05,
								duration: 0.2,
							},
						}}
						exit={{
							opacity: 0,
							scale: 0.9,
							filter: 'blur(2px)',
							transition: {
								delay: 0.15,
								duration: 0.3,
							},
						}}
						whileTap={{
							scale: 0.95,
							transition: {
								duration: 0.1,
							},
						}}
						transition={{
							duration: 3,
						}}
						className='rounded-full p-2 text-slate-400'
						onClick={() => {
							setNewValue(id, currentValue.slice(0, -1))
						}}
					>
						<FeatherIcon icon='delete' />
					</motion.button>
				)}
			</AnimatePresence>
			<motion.div
				animate={{
					scale: dragProgress < 100 ? dragProgress / 150 : 1,
					opacity: dragProgress / 100,
				}}
				className='absolute w-12 h-12 top-0 left-0 flex justify-center items-center'
			>
				<FeatherIcon icon='rotate-ccw' className='text-slate-400' />
			</motion.div>
		</div>
	)
}

export default DeleteKey
