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
        message: 'What would you like the name of the module to be?',
        required: true
    }];

    this.prompt(prompts, function (props) {
      this.name = props.name;

      done();
    }.bind(this));
  },

  writing: {
    app: function () {
      this.destinationRoot(path.join('app', this.name));
      this.template('controller.js', this.name + '-controller.js');
      this.template('directive.js', this.name + '-directive.js');
      this.template('module.js', this.name + '-module.js');
      this.template('service.js', this.name + '-service.js');
      this.template('template.html', this.name + '-template.html');
    }
  },

  end: function () {
  }
});

module.exports = TeklightGenerator;
