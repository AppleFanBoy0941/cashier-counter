import { motion, AnimatePresence } from 'framer-motion'
import { useEffect } from 'react'
import { useState } from 'react'

export default function Digit({ digit, index, updater }) {
	digit = parseInt(digit)
	return (
		<motion.div
			drag='y'
			dragConstraints={{ top: -16, bottom: 16 }}
			dragSnapToOrigin={true}
			dragElastic={0.1}
			onDragEnd={(e, info) => {
				if (info.offset.y / -16 > 1) {
					console.log('is dragged up')
					console.log(updater(digit === 9 ? 0 : digit + 1, index))
				} else if (info.offset.y / -16 < -1) {
					console.log('is dragged down')
					console.log(updater(digit === 0 ? 9 : digit - 1, index))
				} else {
					console.log('is not dragged')
					console.log(updater(digit, index))
				}
			}}
			className='h-16 w-12 flex justify-center items-center'
		>
			<AnimatePresence>
				<motion.p
					key={digit}
					initial={{
						y: -24,
						opacity: 0,
					}}
					animate={{
						y: 0,
						opacity: 1,
						transition: { delay: (3 - index) * 0.2 },
					}}
					exit={{
						y: 24,
						opacity: 0,
						transition: { delay: (3 - index) * 0.2 - 0.2, ease: 'easeIn' },
					}}
					className='absolute text-slate-800 dark:text-slate-100'
				>
					{digit}
				</motion.p>
			</AnimatePresence>
		</motion.div>
	)
}
