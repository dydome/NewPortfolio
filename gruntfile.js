module.exports = function(grunt) {

  grunt.initConfig({
    sass: {
      options: {
        sourceMap: true
      },
      dist: {
        files: {
          'css/style.css': 'css/style.scss'
        }
      }
    },
    watch: {
      scripts: {
          files: ['css/*.scss'],
          tasks: ['sass'],
          options: {
              spawn: false,
          },
      } 
  },
  imagemin: {
    dynamic: {
        files: [{
            expand: true,
            cwd: 'images/',
            src: ['**/*.{png,jpg,gif}'],
            dest: 'images/build/'
        }]
    }
  }
  });

  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-imagemin');

  // Default task(s)

  grunt.registerTask('default', ['watch']);
};