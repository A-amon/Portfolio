
const path = require('path')

module.exports = {
	webpack: {
		alias: {
			'@components': path.resolve(__dirname, 'src/components'),
			'@containers': path.resolve(__dirname, 'src/containers'),
			'@assets': path.resolve(__dirname, 'src/assets'),
			'@context': path.resolve(__dirname, 'src/context'),
			'@data': path.resolve(__dirname, 'src/data'),
			'@routes': path.resolve(__dirname, 'src/routes'),
			'@utils': path.resolve(__dirname, 'src/utils')
		}
	}
}