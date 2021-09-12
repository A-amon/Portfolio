import { useContext } from 'react'
import { context as slackContext } from '@context/slack'
import Workspace from '@components/Slack/Workspace'

const WorkspacesContainer = () => {
	const { state } = useContext(slackContext)

	const handleWorkspaceClick = () => {

	}

	return (
		<div className='workspaces-container'>
			{
				state.workspaces && state.workspaces.map((workspace, ind) => (
					<Workspace key={workspace.name}
						name={workspace.name}
						onClick={() => handleWorkspaceClick()}
						current={workspace.current}
					/>
				))
			}
		</div>
	)
}

export default WorkspacesContainer