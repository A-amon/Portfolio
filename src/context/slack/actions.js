import types from './types'

const setWorkspaces = (dispatch, workspaces) => {
	dispatch({
		type: types.SET_WORKSPACES,
		workspaces: workspaces.map((workspace, ind) => {
			workspace.current = false
			if (ind === 0) {
				workspace.current = true
			}

			return workspace
		})
	})
}

const setFirstEl = (dispatch, firstEl) => {
	dispatch({
		type: types.SET_FIRST_EL,
		firstEl
	})
}

const setLastEl = (dispatch, lastEl) => {
	dispatch({
		type: types.SET_LAST_EL,
		lastEl
	})
}

export {
	setWorkspaces,
	setFirstEl,
	setLastEl
}