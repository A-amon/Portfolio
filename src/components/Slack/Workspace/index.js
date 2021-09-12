/**
 * WORKSPACE BUTTON ON SIDEBAR
 */

import PropTypes from 'prop-types'

const Workspace = ({ name, onClick, current }) => {
	return (
		<button className={`workspace ${current ? 'current' : ''}`} title={name} onClick={onClick}>
			{name[0].toUpperCase()}
		</button>
	)
}

Workspace.propTypes = {
	name: PropTypes.string.isRequired,
	onClick: PropTypes.func.isRequired,
	current: PropTypes.bool.isRequired
}

export default Workspace