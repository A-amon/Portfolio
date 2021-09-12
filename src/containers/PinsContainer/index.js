import { useContext } from 'react'
import { context } from '@context/main'
import Pin from '@components/Windows/Pin'
import { setPinStatus } from '@context/main/actions'
import { getImage, getModal } from '@utils/helpers/require.helpers'

const PinsContainer = () => {
	const { state, dispatch } = useContext(context)

	const handlePinClick = (name, pinStatus) => {
		const newPinStatus = pinStatus === 'closed' || pinStatus === 'inactive' ? 'opened' : 'inactive'
		setPinStatus(state, dispatch, name, newPinStatus)
	}

	return (
		<div className="pins-container">
			{
				state.pins.map(pin => (
					<Pin key={pin.name}
						status={pin.status}
						name={pin.name}
						image={getImage(pin.image)}
						control={pin.control}
						onClick={() => handlePinClick(pin.name, pin.status)}
						Modal={getModal(pin.control)} />
				))
			}
		</div>
	)
}

export default PinsContainer