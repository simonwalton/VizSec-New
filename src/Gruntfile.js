/*global module:false*/
module.exports = function (grunt) {
	// load contributed tasks
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-html');
	grunt.loadNpmTasks('grunt-jekyll');

	// Project configuration.
	grunt.initConfig({
		pkg: '<json:package.json>',
		project: {
			app: ['app'],
			jekyll: ['<%= project.app %>/jekyll'],
			assets: ['<%= project.jekyll %>/assets'],
			sass: ['<%= project.assets %>/sass/_bootstrap_include.scss']
		},
		jekyll: {
			options: { 
				bundleExec: true,
				src : '<%= project.jekyll %>'
			},
			serve: { 
				options: {
					serve: true,
					dest: '.jekyll',
					drafts: true,
					future: true
				}
			}
		},
		htmllint: {
			all: ["<%= project.jekyll %>/_site/**/*.html",
				'!<%= project.jekyll %>/_site/past/**',
			]
		},
		// copies resources from our bower components directory to jekyll's assets
		copy: {
			bower_resources: {
				src: ['bower_components/bootstrap-sass/assets/javascripts/bootstrap.min.js',
					'bower_components/jquery/dist/jquery.min.js'
				],
				dest: '<%= project.jekyll %>/assets/js/',
				flatten: true,
				expand:true	
			}
		}
	});

	// default task: copy bower resources to jekyll's directory
	// and then run jekyll, which will serve and watch for changes by default
	grunt.registerTask('default', ['copy','jekyll']);
};
