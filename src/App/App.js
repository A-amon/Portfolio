import { useContext, useEffect } from 'react'
import { context } from '@context/main'
import { setPins } from '@context/main/actions'
import { getAllPins } from '@data/utilities'
import Hero from '@components/Windows/Hero'
import Taskbar from '@components/Windows/Taskbar'

function App () {
	const { dispatch } = useContext(context)

	useEffect(() => {
		const pins = getAllPins()
		setPins(dispatch, pins)
	}, [])

	return (
		<div className='App'>
			<main>
				<Hero />
				<Taskbar />
			</main>
		</div>
	)
}

export default App