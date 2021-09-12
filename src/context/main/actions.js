import types from './types'

const setPins = (dispatch, pins) => {
	dispatch({
		type: types.SET_PINS,
		pins: pins.map(pin => {
			pin.status = 'closed'
			return pin
		})
	})
}

const setPinStatus = (state, dispatch, name, pinStatus) => {
	dispatch({
		type: types.SET_PIN_STATUS,
		pins: state.pins.map(pin => {
			if (pin.name === name) {
				pin.status = pinStatus
			}

			return pin
		})
	})
}

const setStartStatus = (dispatch, startStatus) => {
	dispatch({
		type: types.SET_START_STATUS,
		startStatus: startStatus === 'closed' ? 'opened' : 'closed'
	})
}

export {
	setPins,
	setPinStatus,
	setStartStatus
}