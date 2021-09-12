/**
 * MAIN COMPONENT FOR SLACK
 */
import PropTypes from 'prop-types'
import SlackApp from './App'
import { Provider as SlackProvider } from '@context/slack'

const Slack = ({ status }) => {
	return (
		<SlackProvider>
			<SlackApp status={status} />
		</SlackProvider>
	)
}

Slack.propTypes = {
	status: PropTypes.string.isRequired
}

export default Slack