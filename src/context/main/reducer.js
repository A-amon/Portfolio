import types from './types'

const initialState = {
	pins: [],
	startStatus: 'closed'
}

const reducer = (state, action) => {
	switch (action.type) {
		case types.SET_PINS:
			return { ...state, pins: action.pins }
		case types.SET_PIN_STATUS:
			return { ...state, pins: action.pins }
		case types.SET_START_STATUS:
			return { ...state, startStatus: action.startStatus }
		default:
			break
	}
}

export { reducer, initialState }