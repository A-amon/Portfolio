import Sidebar from '../Sidebar'
import WorkspacesContainer from '@containers/WorkspacesContainer'

const WorkspacesSidebar = () => {
	return (
		<Sidebar workspaces={true}>
			<WorkspacesContainer />
		</Sidebar>
	)
}

export default WorkspacesSidebar