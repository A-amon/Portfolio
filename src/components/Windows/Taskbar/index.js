/**
 * TASKBAR FOR WINDOWS
 */

import { useContext } from 'react'
import { context } from '@context/main'
import Container from '@components/Container'
import Start from '@components/Windows/Start'
import Datetime from '@components/Windows/Datetime'
import PinsContainer from '@containers/PinsContainer'
import { setStartStatus } from '@context/main/actions'

const Taskbar = () => {
	const { state, dispatch } = useContext(context)

	/**
	 * Handle Start button click event
	 * > Update status of Start button
	 */
	const handleStartClick = () => {
		setStartStatus(dispatch, state.startStatus)
	}

	return (
		<div className='taskbar'>
			<Container>
				<Start status={state.startStatus}
					onClick={() => handleStartClick()} />
				<PinsContainer />
				<Datetime />
			</Container>
		</div>
	)
}

export default Taskbar