/**
 * CHAT PAGE
 */

import { useRef, useState } from 'react'
import { useForm } from 'react-hook-form'
import ChannelPage from '@components/Slack/ChannelPage'

const Chat = () => {
	const [submitMessage, setSubmitMessage] = useState('')
	const formRef = useRef(null)
	const { register, handleSubmit, formState: { errors } } = useForm()

	/**
	 * Encode form data
	 * @param {object} data
	 * @returns {string}
	 */
	const encode = data => {
		return Object.keys(data)
			.map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
			.join('&')
	}

	/**
	 * Handle form submit event
	 * @param {object} data
	 */
	const onSubmit = (data) => {
		fetch('/', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded'
			},
			body: encode({ 'form-name': 'contact', ...data })
		})
			.then(() => {
				setSubmitMessage('Successfully sent message! You will get a reply in a few days time 😀')
			})
			.catch(() => {
				setSubmitMessage('Failed to send message. Maybe something happened? 😅 Let me know about it.')
			})
			.finally(() => {
				formRef.current.reset()
			})
	}

	return (
		<ChannelPage className='channel-chat'>
			<p className='channel-chat__text'>
				Drop me a message here! 😀
			</p>
			<form onSubmit={handleSubmit(onSubmit)}
				ref={formRef}
			>
				<div className='channel-chat__group'>
					<input className='channel-chat__input'
						aria-label='Name'
						aria-describedby='name-error'
						placeholder='Name'
						{...register('Name', { required: true })} />
					{errors.Name?.type === 'required' && (
						<strong id='name-error' className='channel-chat__error'>
							Name is required
						</strong>
					)}
				</div>
				<div className='channel-chat__group'>
					<input type='email'
						aria-label='Email address'
						aria-describedby='email-error'
						className='channel-chat__input'
						placeholder='Email address'
						{...register('Email', { required: true })} />
					{errors.Email?.type === 'required' && (
						<strong id='email-error' className='channel-chat__error'>
							Email address is required
						</strong>
					)}
				</div>
				<div className='channel-chat__group'>
					<textarea className='channel-chat__input'
						placeholder='Message'
						aria-label='Message'
						aria-describedby='message-error'
						{...register('Message', { required: true })} />
					{errors.Message?.type === 'required' && (
						<strong id='message-error' className='channel-chat__error'>
							Message is required
						</strong>
					)}
				</div>
				<button className='channel-chat__submit'
					type='submit'>
					Send
				</button>
				<p className='channel-chat__submit-message' aria-live='polite'>
					{
						submitMessage
					}
				</p>
			</form>
		</ChannelPage>
	)
}

export default Chat