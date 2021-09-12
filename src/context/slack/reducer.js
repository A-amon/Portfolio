import types from './types'

const initialState = {
	workspaces: [],
	firstEl: null,
	lastEl: null
}

const reducer = (state, action) => {
	switch (action.type) {
		case types.SET_WORKSPACES:
			return { ...state, workspaces: action.workspaces }
		case types.SET_FIRST_EL:
			return { ...state, firstEl: action.firstEl }
		case types.SET_LAST_EL:
			return { ...state, lastEl: action.lastEl }
		default:
			break
	}
}

export { reducer, initialState }