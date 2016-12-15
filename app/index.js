'use strict';
var generators = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');
var path = require('path');

module.exports = generators.Base.extend({
  initializing(){
  	console.log(chalk.green('I am going to build your app!'))
  },
  // prompting(){
  // 	var done = this.async();
  // 	this.name = path.basename(process.cwd());
  // 	this.pkgName = path.basename(process.cwd());
  // 	var prompts = [
  //     {
  //         type: 'input',
  //         name: 'name',
  //         message: 'name of app:', default: this.name
  //     }
  //   ];
  //   this.prompt(prompts, function (props) {
  //           this.name = props.name;
  //           this.pkgName = props.name;
  //           done();
  //   }.bind(this));
  // },
  writing:{
  	 app(){
	 		this.directory('src', 'src');   //拷贝目录
	  	 this.directory('config', 'config');   //拷贝目录
	  	 this.directory('build', 'build');   //拷贝目录
	  	 this.copy('babelrc', '.babelrc');   //拷贝文件
	  	 this.copy('package.json', 'package.json');   //拷贝文件
  	 }
  },
 	generateClient() {
        this.sourceRoot(path.join(__dirname, 'templates'));
        this.destinationPath('./');
  },
 end: function() {
    this.log(yosay(
        'Your app has been created successfully!'
    ));
  }
});