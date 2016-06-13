var gulp = require('gulp');

gulp.task('default', function() {
	console.log('hello, gulp!');
});

gulp.task('watch', function() {
	gulp.watch('js/**/*.js', ['default']);
});

gulp.task('changes', function() {
	browserSync.init({
		server: {
			baseDir: "./"
		}
	});
});