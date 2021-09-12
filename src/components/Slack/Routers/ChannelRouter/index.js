/**
 * ROUTER FOR CHANNELS
 * > Switch between every channel
 */
import PropTypes from 'prop-types'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import ChannelsSidebar from '../../Sidebars/Channels'
import About from '@routes/About'
import Projects from '@routes/Projects'
import Chat from '@routes/Chat'

const ChannelRouter = ({ children, opened }) => {
	/**
	 * Redirect to home route
	 * If app is not opened
	 * @param  {object} ChannelRoute
	 */
	const getRoute = (ChannelRoute) => {
		return opened
			? <ChannelRoute />
			: <Redirect to='/' />
	}

	return (
		<Router>
			{
				children
			}
			<div className='channel-router'>
				<ChannelsSidebar />
				<Switch>
					<Route path='/chat'>
						{
							getRoute(Chat)
						}
					</Route>
					<Route path='/projects'>
						{
							getRoute(Projects)
						}
					</Route>
					<Route path='/about' >
						{
							getRoute(About)
						}
					</Route>
					<Route path='/'>
						{
							opened && <Redirect to='/about' />
						}
					</Route>
				</Switch>
			</div>
		</Router>
	)
}

ChannelRouter.propTypes = {
	children: PropTypes.any,
	opened: PropTypes.bool
}

export default ChannelRouter