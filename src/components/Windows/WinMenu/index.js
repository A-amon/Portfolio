/**
 * WINDOWS MENU POPUP
 */
import { useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import { createPortal } from 'react-dom'

const WinMenu = ({ opened }) => {
	const menuRef = useRef(null)

	useEffect(() => {
		if (opened) {
			menuRef.current.focus()
		}
	}, [opened])

	return createPortal(
		<div id='win-menu' className={`win-menu ${opened ? 'show' : ''}`} role='dialog'>
			<div className="container">
				<div className='win-menu__dialog' ref={menuRef} tabIndex='0'>
					<p className='win-menu__text'>Sorry, there is nothing here at the moment.</p>
					<p className='win-menu__text'>Only the Slack clone is executable now.</p>
					<p className='win-menu__text'>
						If you wish to see more features, let me know at
						<a className='win-menu__link' href="mailto:adarkamon@gmail.com">adarkamon@gmail.com</a>
					</p>
				</div>
			</div>
		</div>,
		document.body
	)
}

WinMenu.propTypes = {
	opened: PropTypes.bool.isRequired
}

export default WinMenu