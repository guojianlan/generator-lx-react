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
    	API_ROOT:JSON.stringify('woca')
    }
	},
	webbuild:{
		assetsRoot: path.resolve(__dirname, '../dist/web'),
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    definePlugin:{
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