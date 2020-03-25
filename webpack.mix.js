const mix = require('laravel-mix');

const css = {
    src: 'src/scss/style.scss',
    dest: './'
};

/*const gutenberg = {
    src: 'gutenberg.scss',
    dest: './css'
};*/

const js = {
    src: './src/js/app.js',
    dest: './js/min/site.min.js'
};

const production = mix.inProduction();
const devtool = production ? false : 'source-map';

mix.webpackConfig({
    devtool: devtool
});

if (!production) {
    mix.sourceMaps();
}


mix
    .js(js.src, js.dest)
    .sass(css.src, css.dest)
    // .sass(gutenberg.src, gutenberg.dest)
    .options({
        processCssUrls: false,
    });


