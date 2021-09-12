/**
 * ABOUT PAGE
 */
import { useRef, useState } from 'react'
import ChannelPage from '@components/Slack/ChannelPage'
import ChannelLink from '@components/Slack/ChannelLink'

const About = () => {
	const [lastEl, setLastEl] = useState(null)
	const lastElRef = useRef(null)

	/**
	 * Update lastElRef
	 * @param {object} ref
	 */
	const handleRef = (ref) => {
		lastElRef.current = ref
		setLastEl(ref)
	}

	return (
		<ChannelPage className='channel-about' lastElRef={lastEl}>
			<div className='channel-about__header'>
				<div className='channel-about__image'>
					<img src='' alt='' aria-label='Profile picture' />
				</div>
				<h2 className='channel-about__name'>
					Amon
				</h2>
				<p className='channel-about__role'>
					Web developer
				</p>
				<ul className='channel-about__socials'>
					<li className='channel-about__social'>
						<a href='https://github.com/A-amon' aria-label='Github'>
							<svg aria-hidden='true' xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'><path d='M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z' /></svg>
						</a>
					</li>
					<li className='channel-about__social'>
						<a href='mailto:adarkamon@gmail.com' aria-label='Email'>
							<svg aria-hidden='true' xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'><path d='M12 12.713l-11.985-9.713h23.97l-11.985 9.713zm0 2.574l-12-9.725v15.438h24v-15.438l-12 9.725z' /></svg>
						</a>
					</li>
				</ul>
				<p className='channel-about__quote'>
					&quot;Always learning, for better and cleaner code&quot;
				</p>
			</div>
			<div className='channel-about__body'>
				<p className='channel-about__text'>
					Hello! 😀
				</p>
				<p className='channel-about__text'>
					I enjoy anything and everything to do with web and app development. Are you a web enthusiast or someone from the same field? 😉
				</p>
				<p className='channel-about__text'>
					Then, do check out my projects!
				</p>
				<ChannelLink to='/projects' label='projects' />
				<p className='channel-about__text'>
					Have some free time on hands?
				</p>
				<p className='channel-about__text'>
					Let’s have a chat.
				</p>
				<ChannelLink to='/chat' label='chat' ref={handleRef} />
			</div>
		</ChannelPage >
	)
}

export default About