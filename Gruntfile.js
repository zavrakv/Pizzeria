module.exports = function(grunt) {
  /*TODO: finish refactoring*/
	var historyFallback = require('connect-history-api-fallback');
  
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
  
		browserSync: {
			dev: {
				bsFiles: {
					src : [
						'src/**/*.css',
						'src/**/*.js',
						'src/**/*.html'
					]
				},
				options: {
          proxy: "localhost:8001",
					watchTask: true
					// server: {
					// 	baseDir: './public',
					// 	middleware: [
					// 		historyFallback()
					// 	]
					// }
				}
			}
		},
    
		bower: {
			install: {
				options: {
					install: true,
					copy: false,
					targetDir: './libs',
					cleanTargetDir: true
				}
			}
		},
  
		karma: {
			options: {
				configFile: 'config/karma.conf.js'
			},
			unit: {
				singleRun: true
			},
    
			continuous: {
				singleRun: false,
				autoWatch: true
			}
		},
    
		html2js: {
			options: {
				base: 'src/app'
			},
			dist: {
				src: ['src/app/**/*.html'],
				dest: 'tmp/templates.js'
			}
		},
  
		concat: {
			options: {
				separator: ';'
			},
			dist: {
				src: [
					'tmp/*.js',
					'src/app/**/*.module.js',
					'src/app/**/*.js'
				],
				dest: 'public/js/app.js'
			},
			vendor: {
				src: [
					'bower_components/angular/angular.min.js',
					'bower_components/angular-ui-router/release/angular-ui-router.min.js',
					'bower_components/jquery/dist/jquery.min.js',
					'bower_components/bootstrap/dist/js/bootstrap.min.js'
				],
				dest: 'public/js/vendor.js'
			},
			css: {
				src: [
					'bower_components/bootstrap/dist/css/bootstrap.min.css',
					'bower_components/bootstrap/dist/css/bootstrap-theme.min.css',
				],
				dest: 'public/css/vendor.css'
			}
		},
  
		uglify: {
			dist: {
				files: {
					'public/js/app.js': ['public/js/app.js'],
					'public/js/vendor.js': ['public/js/vendor.js']
				},
				options: {
					/*Or use $inject instead*/
					mangle: false
				}
			}
		},
  
		clean: {
			temp: {
				src: [ 'tmp' ]
			}
		},
    
    copy: {
      main: {
        files: [
          {expand: true, cwd: 'src/', src: ['fonts/**'], dest: 'public/'}
        ]
      }
    },
  
		watch: {
			dev: {
				files: [ 'Gruntfile.js', 'src/**/*.js', 'src/**/*.html' ],
				tasks: [ 'html2js:dist', 'concat:dist', 'concat:vendor', 'concat:css', 'clean:temp', 'copy:main' ],
				options: {
					atBegin: true
				}
			},
			min: {
				files: [ 'Gruntfile.js', 'src/**/*.js', '*.html' ],
				tasks: [ 'karma:unit', 'html2js:dist', 'concat:dist', 'clean:temp', 'uglify:dist' ],
				options: {
					atBegin: true
				}
			}
		}
		
	});
  
	// Load the plugin that provides the task.
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-compress');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-html2js');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-bower-task');
	grunt.loadNpmTasks('grunt-karma');
	grunt.loadNpmTasks('grunt-browser-sync');
  grunt.loadNpmTasks('grunt-contrib-copy');
  
	// Build tasks.
	grunt.registerTask('dev', [ 'bower', 'browserSync', 'watch:dev' ]);
	grunt.registerTask('test', [ 'bower', 'karma:continuous' ]);
	grunt.registerTask('minified', [ 'bower', 'connect:server', 'watch:min' ]);
  
};
