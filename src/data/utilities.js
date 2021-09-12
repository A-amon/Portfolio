import data from './index.json'

const getAllPins = () => {
	return data.pins
}

const getAllWorkspaces = () => {
	return data.workspaces
}

const getAllProjects = () => {
	return data.projects
}

export {
	getAllPins,
	getAllWorkspaces,
	getAllProjects
}