/*global module:false*/
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    // Metadata.
    pkg: grunt.file.readJSON('package.json'),

    handlebars: {
      compile: {
        options: {
          namespace: "Thorax.templates",
          processName: function(filePath) {
            var template_names = filePath.match(/js\/templates\/(.*).html/);
            return template_names[1];
          }
        },
        files: {
          "js/alltemplates.js": "js/templates/**/*.html",
        }
      }
    },

    watch: {
        handlebars: {
            files: ['js/templates/**/*.html'],
            tasks: ['handlebars']
        }
    }

  });


  grunt.loadNpmTasks('grunt-contrib-handlebars');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Default task.
  grunt.registerTask('default', ['watch']);

};
