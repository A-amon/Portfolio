/**
 * CHANNEL TAB ON SIDEBAR
 */

import { NavLink } from 'react-router-dom'
import PropTypes from 'prop-types'

const Channel = ({ name, path }) => {
	return (
		<li className='channel'>
			<NavLink className='channel__link' to={path} activeClassName='active'>
				{name}
			</NavLink>
		</li>
	)
}

Channel.propTypes = {
	name: PropTypes.string.isRequired,
	path: PropTypes.string.isRequired
}

export default Channel