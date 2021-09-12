/**
 * BASE STYLES FOR EVERY CHANNEL'S PAGE IN ./ROUTES
 */
import { useRef, useEffect, useContext } from 'react'
import PropTypes from 'prop-types'
import { context as slackContext } from '@context/slack'
import { setLastEl } from '@context/slack/actions'

const ChannelPage = ({ children, className, lastElRef }) => {
	const { dispatch } = useContext(slackContext)

	const pageRef = useRef(null)

	useEffect(() => {
		pageRef.current.focus()
	}, [])

	useEffect(() => {
		lastElRef && setLastEl(dispatch, lastElRef)
	}, [lastElRef])

	return (
		<div className={`channel-page ${className}`} ref={pageRef} tabIndex='0'>
			{
				children
			}
		</div>
	)
}

ChannelPage.propTypes = {
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node
	]),
	className: PropTypes.string,
	lastElRef: PropTypes.object
}

export default ChannelPage