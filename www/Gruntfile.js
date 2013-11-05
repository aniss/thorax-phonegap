/*global module:false*/
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    // Metadata.
    pkg: grunt.file.readJSON('package.json'),

    handlebars: {
      compile: {
        options: {
          namespace: 'Thorax.templates',
          processName: function(filePath) {
            var template_names = filePath.match(/js\/templates\/(.*).html/);
            return template_names[1];
          }
        },
        files: {
          'js/alltemplates.js': 'js/templates/**/*.html',
        }
      }
    },

    uglify: {
        options: {
            compress: false,
            beautify: true
        },
        my_target: {
            files: {
                'js/myapp.min.js': ['js/init.js',
                                  'js/models/**/*.js',
                                  'js/collections/**/*.js',
                                  'js/views/**/*.js',
                                  'js/rooter.js']
            }
        }
    },

    less: {
        development: {
            options: {
                cleancss: true,
                compress: true,
            },
            files: {
                'css/style.min.css': 'css/**/*.less'
            }
        }
    },

    watch: {
        handlebars: {
            files: ['js/templates/**/*.html'],
            tasks: ['handlebars']
        },
        uglify: {
            files: ['js/**/*.js'],
            tasks: ['uglify']
        },
        less: {
            files: ['css/**/*.less'],
            tasks: ['less']
        }
    }

  });


  grunt.loadNpmTasks('grunt-contrib-handlebars');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Default task.
  grunt.registerTask('default', ['watch']);

};
