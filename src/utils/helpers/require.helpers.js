/**
 * Get image path
 * @param  {string} filename
 * @returns {string}
 */
const getImage = (filename) => {
	const image = require(`@assets/images/${filename}`)

	return image.default
}

/**
 * Get modal component
 * @param  {string} modalId
 * @returns {object}
 */
const getModal = (modalId) => {
	const modal = require(`@components/${modalId[0].toUpperCase() + modalId.slice(1)}`)

	return modal.default
}

export {
	getImage,
	getModal
}