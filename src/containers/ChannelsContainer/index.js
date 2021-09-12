import { useContext } from 'react'
import { context as slackContext } from '@context/slack'
import PropTypes from 'prop-types'
import Channel from '@components/Slack/Channel'

const ChannelsContainer = ({ expanded }) => {
	const { state } = useContext(slackContext)

	return (
		<ul className={`channels-container ${expanded ? 'show' : ''}`}>
			{
				state.workspaces && state.workspaces
					.filter(workspace => workspace.current)[0]
					?.channels
					.map(channel => (
						<Channel key={channel.name} name={channel.name} path={channel.path} />
					))
			}
		</ul>
	)
}

ChannelsContainer.propTypes = {
	expanded: PropTypes.bool
}

export default ChannelsContainer