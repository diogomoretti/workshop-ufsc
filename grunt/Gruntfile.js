module.exports = function(grunt) {

    grunt.initConfig({
        

        // Task HTMLMin
        htmlmin: {
            dist: {
                options: {
                    removeComments: true,
                    collapseWhitespace: true
                },
                files: [{
                    expand: true,
                    src: ['./*.html'],
                    dest: 'build/'
                }]
            }
        },

        // Watch task
        watch: {
            scripts: {
                files: ['./*.html'],
                tasks: ['htmlmin'],
            },
        },


    });

    // Load Tasks
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // Register Tasks
    grunt.registerTask('default', 'htmlmin:dist');
    grunt.registerTask('w', 'watch');

};