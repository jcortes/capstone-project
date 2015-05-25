var args = require('yargs').argv;
var config = require('./gulp.config')();
var gulp = require('gulp'); 
var $ = require('gulp-load-plugins')({lazy: true});

var port = process.env.PORT || config.defaultPort;

//// Default Task
gulp.task('default', ['serve-dev']);

/**
 * serve the development environment
 * --debug
 */
gulp.task('serve-dev', function() {
    serve(true /*isDev*/);
});

/**
 * serve the production environment
 * --debug
 */
gulp.task('serve', function() {
    serve(false);
});

/**
 * vet the code and create coverage report
 * @return {Stream}
 */
gulp.task('vet', function() {
    log('Analyzing source with JSHint and JSCS');

    return gulp
        .src(config.alljs)
        .pipe($.if(args.verbose, $.print()))
        .pipe($.jshint())
        .pipe($.jscs());
});

/**
 * serve the code
 * --verbose
 * @param  {Boolean} isDev - dev or build mode
 */
function serve(isDev) {
    var nodeOptions = getNodeOptions(isDev);

    if (args.verbose) {
        console.log(nodeOptions);
    }

    return $.nodemon(nodeOptions)
        .on('restart', ['vet'], function(ev) {
            log('*** nodemon restarted');
            log('files changed:\n' + ev);
        })
        .on('start', function () {
            log('*** nodemon started');
        })
        .on('crash', function () {
            log('*** nodemon crashed: script crashed for some reason');
        })
        .on('exit', function () {
            log('*** nodemon exited cleanly');
        });
}

function getNodeOptions(isDev) {
    return {
        script: config.nodeServer,
        delayTime: 1,
        env: {
            'PORT': port,
            'NODE_ENV': isDev ? 'development' : 'production'
        },
        watch: [config.server]
    };
}

/**
 * Log a message or series of messages using chalk's blue color.
 * Can pass in a string, object or array.
 */
function log(msg) {
    if (typeof(msg) === 'object') {
        for (var item in msg) {
            if (msg.hasOwnProperty(item)) {
                $.util.log($.util.colors.blue(msg[item]));
            }
        }
    } else {
        $.util.log($.util.colors.blue(msg));
    }
}