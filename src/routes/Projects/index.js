/**
 * PROJECTS PAGE
 */
import { useEffect, useState } from 'react'
import ChannelPage from '@components/Slack/ChannelPage'
import Project from '@components/Slack/Project'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { getAllProjects } from '@data/utilities'

const sliderSettings = {
	slidesToShow: 1,
	slidesToScroll: 1,
	infinite: true,
	dots: true
}

const Projects = () => {
	const [projects, setProjects] = useState([])

	useEffect(() => {
		const data = getAllProjects()
		setProjects(data)
	}, [])

	return (
		<ChannelPage className='channel-projects'>
			<Slider className='channel-projects__slider' {...sliderSettings}>
				{
					projects.map(project => (
						<Project key={project.name}
							name={project.name}
							description={project.description}
							repo={project.repo}
							demo={project.demo}
							image={project.image} />
					))
				}
			</Slider>
			<p className='channel-projects__text'>
				More at
				<a className='channel-projects__link' href="https://github.com/A-amon/Projects">A-amon/Projects</a>
			</p>
		</ChannelPage>
	)
}

export default Projects