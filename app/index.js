'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');
var yosay = require('yosay');

var TeklightGenerator = yeoman.generators.Base.extend({
  initializing: function () {
    this.pkg = require('../package.json');
  },

  prompting: function () {
    var done = this.async();

    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the super-duper Teklight generator!'
    ));

    var prompts = [{
        name: 'name',
        message: 'What would you like the name of the application to be?',
        default: path.basename(process.cwd())
    }];

    this.prompt(prompts, function (props) {
      this.name = props.name;

      done();
    }.bind(this));
  },

  writing: {
    app: function () {
      this.directory('skeleton/', './');
    }
  },

  end: function () {
    this.installDependencies();
  }
});

module.exports = TeklightGenerator;
