/**
 * WINDOWS START BUTTON
 */

import PropTypes from 'prop-types'
import WinMenu from '@components/Windows/WinMenu'

/**
 * Statuses for Start button
 */
const statuses = {
	opened: 'opened',
	closed: 'closed'
}

const Start = ({ status, onClick }) => {
	return (
		<>
			<button className={`start ${status ? `start--${status}` : ''}`}
				title='Start'
				aria-controls='win-menu'
				onClick={onClick}
			>
				<svg aria-hidden='true' className='start__svg' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M0 12v-8.646l10-1.355v10.001h-10zm11 0h13v-12l-13 1.807v10.193zm-1 1h-10v7.646l10 1.355v-9.001zm1 0v9.194l13 1.806v-11h-13z" /></svg>
			</button>
			<WinMenu opened={status === 'opened'} />
		</>
	)
}

Start.propTypes = {
	status: PropTypes.oneOf(Object.values(statuses)).isRequired,
	onClick: PropTypes.func.isRequired
}

export default Start