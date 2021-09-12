/**
 * Slack app/modal
 * > Combine other related components
 */
import PropTypes from 'prop-types'
import { useContext, useEffect } from 'react'
import { context } from '@context/main'
import { context as slackContext } from '@context/slack'
import Taskbar from '../Taskbar'
import Modal from '@components/Modal'
import WorkspacesSidebar from '../Sidebars/Workspaces'
import ChannelRouter from '../Routers/ChannelRouter'
import { getAllWorkspaces } from '@data/utilities'
import { setPinStatus } from '@context/main/actions'
import { setWorkspaces } from '@context/slack/actions'

const SlackApp = ({ status }) => {
	const main = useContext(context)
	const slack = useContext(slackContext)

	/**
	 * Initialize workspaces
	 */
	useEffect(() => {
		const workspaces = getAllWorkspaces()
		setWorkspaces(slack.dispatch, workspaces)
	}, [])

	/**
	 * Handle minimize button click
	 */
	const handleMinimize = () => {
		setPinStatus(main.state, main.dispatch, 'Slack', 'inactive')
	}

	/**
	 * Handle close button click
	 */
	const handleClose = () => {
		setPinStatus(main.state, main.dispatch, 'Slack', 'closed')
	}

	return (
		<Modal id='slack'
			className='slack'
			status={status}
			focusTrapEl={[slack.state.firstEl, slack.state.lastEl]}
			onEsc={handleClose}>
			<div className='slack__dialog'>
				<ChannelRouter opened={status === 'opened'}>
					<Taskbar onClose={() => handleClose()} onMinimize={() => handleMinimize()} />
					<WorkspacesSidebar />
				</ChannelRouter>
			</div>
		</Modal>
	)
}

SlackApp.propTypes = {
	status: PropTypes.string.isRequired
}

export default SlackApp