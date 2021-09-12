/**
 * BASE FOR SIDEBARS IN SLACK
 */

import PropTypes from 'prop-types'

const Sidebar = ({ workspaces, children }) => {
	return (
		<div className={`slack-sidebar ${workspaces ? 'slack-sidebar--workspaces' : ''}`}>
			{
				children
			}
		</div>
	)
}

Sidebar.propTypes = {
	workspaces: PropTypes.bool,				// true for smaller width
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node
	])
}

export default Sidebar