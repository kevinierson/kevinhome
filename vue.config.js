const webpack = require('webpack')
module.exports = {
	configureWebpack: {
		resolve: {
			alias: {
				'assets': '@/assets',
				'components': '@/components',
				'network': '@/network',
				'views': '@/views'
			}
		},
		plugins: [
			new webpack.ProvidePlugin({
				$: "jquery",
				jQuery: "jquery",
				"windows.jQuery": "jquery"
			})
		]
	}

}
