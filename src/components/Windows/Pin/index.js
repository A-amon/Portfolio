/**
 * PINNED APP ON WINDOWS TASKBAR
 */

import PropTypes from 'prop-types'

/**
 * Status for the pin
 */
const statuses = {
	opened: 'opened',
	inactive: 'inactive',
	closed: 'closed'
}

const Pin = ({ image, name, status, control, onClick, Modal }) => {
	/**
	 * Get message for aria-label
	 * @param {string} status
	 * @param {string} name
	 * @returns {string} message
	 */
	const getLabelMessage = (status, name) => {
		let message = ''

		switch (status) {
			case statuses.opened:
				message += 'Close'
				break
			case statuses.inactive:
				message += 'Expand'
				break
			case statuses.closed:
				message += 'Open'
				break
			default:
				break
		}

		message += ` ${name} application`
		return message
	}

	return (
		<>
			<button className={`pin ${status ? `pin--${status}` : ''}`}
				aria-label={getLabelMessage(status, name)}
				aria-controls={control}
				title={name}
				onClick={onClick}>
				<img className='pin__img' src={image} alt={name} />
			</button>
			<Modal status={status} />
		</>
	)
}

Pin.propTypes = {
	image: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	status: PropTypes.oneOf(Object.values(statuses)).isRequired,
	control: PropTypes.string.isRequired,
	onClick: PropTypes.func.isRequired,
	Modal: PropTypes.func.isRequired
}

export default Pin