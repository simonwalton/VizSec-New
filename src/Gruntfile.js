/*global module:false*/
module.exports = function (grunt) {

  // lint - uses [jshint](https://github.com/jshint/jshint/)
  // jade - uses [jade](https://github.com/visionmedia/jade)
  // min - uses [uglify-js](https://github.com/mishoo/UglifyJS)
  // mincss - uses [csslint](https://github.com/stubbornella/csslint/wiki/Rules)

  // load contributed tasks
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-jekyll');
  
  // Project configuration.
  grunt.initConfig({
    pkg: '<json:package.json>',
	project: {
		app: ['app'],
		jekyll: ['<%= project.app %>/jekyll'],
		assets: ['<%= project.app %>/assets'],
		css: ['<%= project.assets %>/sass/style.scss']
	},
	sass: {
		dev: {
			options: {
				style: 'expanded',
				compass: false
			},
			files: {
				'<%= project.assets %>/css/style.css':'<%= project.css %>'
			}
		}
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
    lint: {
      files: ['source/assets/*.js']
    },
    copy: {
	  bower_resources: {
		src: ['bower_components/bootstrap-sass/assets/javascripts/bootstrap.min.js',
			'bower_components/jquery/dist/jquery.min.js'
		],
		dest: '<%= project.jekyll %>/js/',
	    flatten: true,
		expand:true	
	  }
    /*  staticFiles: {
        src: ['source/static/*'],
        dest: 'deploy/'
      },
      img: {
        src: ['source/assets/img/*'],
        dest: 'deploy/img'
      },
      jquery: {
        src: ['source/assets/js/jquery-1.7.2.min.js'],
        dest: 'deploy/js/'
      },
      f2015: {
        src: ['source/files/vizsec2015/*'],
        dest: 'deploy/files/2015'
      },
      f2014: {
        src: ['source/files/vizsec2014/*'],
        dest: 'deploy/files/2014'
      },
      f2013: {
        src: ['source/files/vizsec2013/*'],
        dest: 'deploy/files/2013'
      },
      f2011: {
        src: ['source/files/vizsec2011/*'],
        dest: 'deploy/files/2011'
      },
      f2010: {
        src: ['source/files/vizsec2010/*'],
        dest: 'deploy/files/2010'
      },
      f2009: {
        src: ['source/files/vizsec2009/posters/*',
          'source/files/vizsec2009/papers/*'
        ],
        dest: 'deploy/files/2009'
      },
      f2008: {
        src: ['source/files/vizsec2008/*'],
        dest: 'deploy/files/2008'
      },
      f2007: {
        src: ['source/files/vizsec2007/*'],
        dest: 'deploy/files/2007'
      },
      f2006: {
        src: ['source/files/vizsec2006/*'],
        dest: 'deploy/files/2006'
      }*/
    },
	/*jade: {
		compile: {
			options: {
				data: {
					debug: true
				}
			},
			files: {
				'deploy/404.html': 'source/templates/404.jade',
				'deploy/toc.html': 'source/templates/toc.jade',
				'deploy/about.html': 'source/templates/about.jade',
				'deploy/index.html': 'source/templates/index.jade',
				'deploy/johng.html': 'source/templates/johng.jade',
				'deploy/past.html': 'source/templates/past.jade',
				'deploy/publicity.html': 'source/templates/publicity.jade',
				'deploy/roles.html': 'source/templates/roles.jade',
				'deploy/vizsec2006/index.html': 'source/templates/vizsec2006/index.jade',
				'deploy/vizsec2007/index.html': 'source/templates/vizsec2007/index.jade',
				'deploy/vizsec2008/index.html': 'source/templates/vizsec2008/index.jade',
				'deploy/vizsec2009/index.html': 'source/templates/vizsec2009/index.jade',
				'deploy/vizsec2010/index.html': 'source/templates/vizsec2010/index.jade',
				'deploy/vizsec2011/index.html': 'source/templates/vizsec2011/index.jade',
				'deploy/vizsec2012/index.html': 'source/templates/vizsec2012/index.jade',
				'deploy/vizsec2013/index.html': 'source/templates/vizsec2013/index.jade',
				'deploy/vizsec2014/index.html': 'source/templates/vizsec2014/index.jade',
				'deploy/vizsec2015/index.html': 'source/templates/vizsec2015/index.jade'
			}
		}
	},*/
	min: {
		app: {
			src: ['source/assets/js/bootstrap.js'],
			dest: 'deploy/js/bootstrap.min.js'
		}
	},
	mincss: {
		'deploy/css/style.min.css': [
			'source/assets/css/bootstrap.min.css',
			'source/assets/css/bootstrap-responsive.min.css',
			'source/assets/css/app.css'
		]
	},
	jshint: {
		options: {
			curly: true,
			eqeqeq: true,
			immed: true,
			latedef: true,
			newcap: true,
			noarg: true,
			sub: true,
			undef: true,
			boss: true,
			eqnull: true,
			browser: true
		},
		globals: {
			jQuery: true
		}
	},
	watch: {
		  sass: {
			  files: '<%= project.assets %>/sass/{,*/}*.{scss,sass}',
			  tasks: ['sass:dev']
		  }
	}
});


  grunt.registerTask('default', ['copy','watch']);

  // Default task will be invoked when grunt is called without any argument
  // run everything except copy
 /* grunt.registerTask('default', 'jade mincss lint min');

  // run everything
  grunt.registerTask('all', ['jade', 'mincss', 'lint', 'min', 'copy']);

  // clean deploy folder
  grunt.registerTask('clean', 'clean');

  // Copy is a separate task, since it does not need to be run as often
  grunt.registerMultiTask('copy', 'Copy static files to deployment directory',
    function () {
      var path = require("path"),
        files = grunt.file.expand(this.file.src),
        dest = this.file.dest;

      grunt.log.writeln('Copying files for ' + this.target + '.');

      files.forEach(function (file) {
        grunt.file.copy(file, path.join(dest, path.basename(file)), {
          noProcess: true
        });
        grunt.log.writeln('File "' + file + '" copied to "' + dest +
          '".');
      });
    });*/

};
