module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    
    //compass plugin start
    compass: {
      dist: {
        options: {
          config: 'config.rb'
        } //options
      } //dev
    }, //compass

    //Uglify plugin start
    uglify: {
      dist: {
        files: {
          'js/min/main.min.js': ['js/*.js']
        } //files
      } //dist
    }, //uglify

    connect: {
    options: {
        hostname: 'localhost', 
        livereload: 35729,
        port: 8888              
    },
    livereload: {
        options: {
            base: '../',
            open: true
            }
        },
    },
     //watch plugin start
    watch: {
      options: { livereload: true },
      sass: {
        files: ['sass/*.scss'],
        tasks: ['compass']
      }, //sass

      js: {
        files: ['js/*.js'],
        tasks: ['uglify']
      }, //js

      html: {
        files: ['*.html']
      } //html
    } //watch
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');


  // Default task(s).
  grunt.registerTask('default', ['compass', 'uglify', 'watch']);

};