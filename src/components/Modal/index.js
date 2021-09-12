/**
 * BASE FOR APP
 */

import { useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import { createPortal } from 'react-dom'

const Modal = ({ status, id, className, children, focusTrapEl, onEsc }) => {
	const modalRef = useRef(null)

	/**
	 * Focus on modal if status is 'opened'
	 * Add event listener for keydown
	 */
	useEffect(() => {
		const isOpened = status === 'opened'
		const modal = modalRef.current

		if (isOpened) {
			modal.focus()
			modal.addEventListener('keydown', handleModalKeydown)
		} else {
			modal.removeEventListener('keydown', handleModalKeydown)
		}
	}, [status, focusTrapEl])

	/**
	 * Handle modal keydown event
	 * > Tab and Esc key check
	 * @param  {object} event
	 */
	const handleModalKeydown = (event) => {
		const { code } = event

		if (code === 'Tab') {
			(focusTrapEl[0] && focusTrapEl[1]) && handleFocusTrap(event, ...focusTrapEl)
		} else if (code === 'Escape') {
			onEsc()
		}
	}

	const handleFocusTrap = (event, firstEl, lastEl) => {
		const { shiftKey } = event
		const currentActive = document.activeElement

		if (shiftKey && currentActive === firstEl) {
			event.preventDefault()
			lastEl.focus()
		} else if (currentActive === lastEl) {
			event.preventDefault()
			firstEl.focus()
		}
	}

	return createPortal(
		<div role='dialog' ref={modalRef} id={id} className={`modal modal--${status} ${className}`}>
			<div className='container'>
				{
					children
				}
			</div>
		</div>,
		document.body
	)
}

Modal.propTypes = {
	status: PropTypes.string.isRequired,
	id: PropTypes.string.isRequired,
	className: PropTypes.string,
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node
	]),
	focusTrapEl: PropTypes.arrayOf(PropTypes.object),
	onEsc: PropTypes.func
}

export default Modal