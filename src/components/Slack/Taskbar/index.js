/**
 * TASKBAR FOR SLACK
 * > Close app
 * > Minimze app
 */
import { useRef, useContext, useEffect } from 'react'
import { useHistory } from 'react-router'
import PropTypes from 'prop-types'
import { context as slackContext } from '@context/slack'
import { setFirstEl } from '@context/slack/actions'

const Taskbar = ({ onClose, onMinimize }) => {
	const { dispatch } = useContext(slackContext)
	const history = useHistory()

	const minRef = useRef(null)

	useEffect(() => {
		setFirstEl(dispatch, minRef.current)
	}, [])

	/**
	 * Navigate to home route
	 * @param  {object} event
	 * @param  {func} callback
	 */
	const handleButtonClick = (event, callback) => {
		history.push('/')
		callback(event)
	}

	return (
		<div className='slack-taskbar'>
			<h2 className='slack-taskbar__title'>
				My Portfolio
			</h2>
			<div className='slack-taskbar__buttons'>
				<button ref={minRef} className='slack-taskbar__button' aria-label='Minimize' onClick={event => handleButtonClick(event, onMinimize)}>
					<svg aria-hidden='true' className='slack-taskbar__svg' viewBox="0 0 25 25" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd"><path d="M0 12v1h23v-1h-23z" /></svg>
				</button>
				<button className='slack-taskbar__button slack-taskbar__button--close' aria-label='Close' onClick={event => handleButtonClick(event, onClose)}>
					<svg aria-hidden='true' className='slack-taskbar__svg' viewBox="0 0 25 25" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd"><path d="M12 11.293l10.293-10.293.707.707-10.293 10.293 10.293 10.293-.707.707-10.293-10.293-10.293 10.293-.707-.707 10.293-10.293-10.293-10.293.707-.707 10.293 10.293z" /></svg>
				</button>
			</div>
		</div>
	)
}

Taskbar.propTypes = {
	onClose: PropTypes.func,
	onMinimize: PropTypes.func
}

export default Taskbar