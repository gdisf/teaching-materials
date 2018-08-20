var path = require('path');

module.exports = function(grunt) {
  grunt.initConfig({
    handlebars: {
      compile: {
        options: {
          // Remove folder path name from file
          processName: function (fileName) {
            return path.basename(fileName, '.hbs');
          },
          namespace: "Handlebars"
        },
        files: {
          'templates/compiled/thumb.hbs.js':'templates/raw/thumb.hbs'
        },
        amd: false
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-handlebars');
  grunt.registerTask('default', ['handlebars']);
  
};
