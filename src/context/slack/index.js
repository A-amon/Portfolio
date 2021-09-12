import { useReducer, createContext } from 'react'
import PropTypes from 'prop-types'
import { reducer, initialState } from './reducer'

const context = createContext()

const Provider = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, initialState)

	return (
		<context.Provider value={{ state, dispatch }}>
			{children}
		</context.Provider>
	)
}

Provider.propTypes = {
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node
	])
}

export { context, Provider }