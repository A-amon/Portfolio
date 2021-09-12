/**
 * LINK TO CHANNEL
 */
import { forwardRef } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const ChannelLink = forwardRef(
	({ to, label }, ref) => {
		return (
			<Link ref={ref} className='channel-link' to={to}>
				<span className='channel-link__hash' aria-hidden='true'>#</span>
				{label}
			</Link>
		)
	})

ChannelLink.propTypes = {
	to: PropTypes.string,
	label: PropTypes.string
}

ChannelLink.displayName = 'ChannelLink'

export default ChannelLink