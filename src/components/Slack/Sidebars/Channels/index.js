import { useState } from 'react'
import Sidebar from '../Sidebar'
import ChannelsContainer from '@containers/ChannelsContainer'

const ChannelsSidebar = () => {
	const [isExpanded, setExpanded] = useState(true)

	return (
		<Sidebar>
			<button className={`channel-router__header ${isExpanded ? 'expanded' : ''}`}
				aria-expanded={isExpanded}
				aria-controls='channels'
				onClick={() => setExpanded(!isExpanded)}>
				<svg className='channel-router__svg' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M24 22h-24l12-20z" /></svg>
				<h3 className='channel-router__title'>Channels</h3>
			</button>
			<ChannelsContainer expanded={isExpanded} />
		</Sidebar>
	)
}

export default ChannelsSidebar