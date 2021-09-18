/**
 * Datetime on taskbar
 */
import { useEffect, useState } from 'react'

const Datetime = () => {
	const [dateTime, setDateTime] = useState({
		time: '00:00',
		date: '00-00-00'
	})

	/**
	 * Month in words
	 */
	const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June',
		'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
	]

	useEffect(() => {
		setInterval(handleTimeChange, 1000)
	}, [])

	/**
	 * Handle interval
	 * > Update date and time
	 */
	const handleTimeChange = () => {
		setDateTime({
			time: getTime(),
			date: getDate()
		})
	}

	/**
	 * Get current date
	 * @returns {string}
	 */
	const getDate = () => {
		const datetime = new Date()

		const day = datetime.getDate()
		const month = months[datetime.getMonth()]
		const year = datetime.getFullYear() % 100	// Only get last two digits

		return `${setDoubleDigits(day)}-${setDoubleDigits(month)}-${year % 100}`
	}

	/**
	 * Get current time
	 * > 12 hours system
	 */
	const getTime = () => {
		const datetime = new Date()
		const hour = datetime.getHours()
		const minute = datetime.getMinutes()
		const type = hour >= 12 ? 'PM' : 'AM'

		return `${setDoubleDigits(hour >= 12 ? hour - 12 : hour)}:${setDoubleDigits(minute)} ${type}`
	}

	/**
	 * Add preceding 0
	 * If number is one digit
	 * @param  {number} number
	 * @returns {string}
	 */
	const setDoubleDigits = (number) => {
		return `${number < 10 ? '0' : ''}${number}`
	}

	return (
		<div className='datetime'>
			<time className='datetime__time datetime__time--time'>{dateTime.time}</time>
			<time className='datetime__time datetime__time--date'>{dateTime.date}</time>
		</div>
	)
}

export default Datetime