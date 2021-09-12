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
// https://blog.logrocket.com/use-hooks-and-context-not-react-and-redux/
// https://www.smashingmagazine.com/2020/01/introduction-react-context-api/