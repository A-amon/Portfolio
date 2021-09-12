/**
 * HERO BACKGROUND
 */
import { useContext } from 'react'
import { context } from '@context/main'
import Container from '@components/Container'
import Particles from 'react-particles-js'
import { setStartStatus } from '@context/main/actions'

const Hero = () => {
	const { state, dispatch } = useContext(context)

	/**
	 * Handle hero click event
	 * > Close windows menu if opened
	 */
	const handleHeroClick = () => {
		const { startStatus } = state
		startStatus === 'opened' && setStartStatus(dispatch, startStatus)
	}

	return (
		<section className='hero' onClick={() => handleHeroClick()}>
			<Container>
				<h1 className="sr-only">
					My portfolio
				</h1>
				<div className='hero__body'>
					<p className='hero__text'>
						Welcome
					</p>
					<p className='hero__text'>
						To my site
					</p>
				</div>
				<Particles className='particles' />
			</Container>
		</section>
	)
}

export default Hero