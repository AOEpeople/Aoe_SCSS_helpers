/*global module:false*/
module.exports = function(grunt) {
  grunt.initConfig({
    scsslint: {
      files: [
        '*.scss'
      ],
      options: {
        config: '.scss-lint.yml'
      }
    }
  });

  grunt.loadNpmTasks('grunt-scss-lint');

  grunt.registerTask('default', ['scsslint']);
};
