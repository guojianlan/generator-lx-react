var path = require('path')
var moduleName = process.argv[2];
module.exports = {
	moduleName:moduleName,
	webdev:{
		port:8081,
		assetsRoot: path.resolve(__dirname, '../dist/web'),
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    definePlugin:{
    	"process.env.NODE_ENV":JSON.stringify('dev'),
    	API_ROOT:JSON.stringify('woca')
    }
	},
	webbuild:{
		index: path.resolve(__dirname, '../dist/web/static/react/index.html'),
		assetsRoot: path.resolve(__dirname, '../dist/web'),
    assetsSubDirectory: 'static/react',
    assetsPublicPath: '/',
    productionSourceMap: false,
    productionGzip: false,
    productionGzipExtensions: ['js', 'css'],
    definePlugin:{
    	"process.env.NODE_ENV":JSON.stringify('production'),
    	API_ROOT:JSON.stringify('woca')
    }
	},
	wxdev:{
		port:8081,
		assetsRoot: path.resolve(__dirname, '../dist/wx'),
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    definePlugin:{
    	API_ROOT:JSON.stringify('woca')
    }
	},
	wxbuild:{
		assetsRoot: path.resolve(__dirname, '../dist/wx'),
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    definePlugin:{
    	API_ROOT:JSON.stringify('woca')
    }
	},
}