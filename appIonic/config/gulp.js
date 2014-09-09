

module.exports = {
  ghpages                :  './ghpages/stackmates/mobile',
  baseURL                :  'mob.stackmat.es',
  contentDir             :  '/Users/wik/googledrive/dreams/private/stackmates/external/',
  browserifyEntry        :  './src/projects/stackmates/appIonic/js/index.js',
  browserifySpecs        :  './src/projects/stackmates/appIonic/**/*.spec.js',
  cordova                :  './src/projects/stackmates/appIonic/cordova/**/*',
  styleEntry             :  './src/projects/stackmates/appIonic/style/ionic.app.scss',
  watchJS                :  './src/projects/stackmates/appIonic/js/**/*.js',
  indexHtml              :  './src/projects/stackmates/appIonic/index.html',
  jsonData               :  './src/projects/stackmates/appIonic/data/**/*.json',
  templatesHtmlIn        :  [
                              './src/projects/stackmates/appIonic/js/**/*.html',
                              './src/projects/stackmates/_shared/angular/**/*.html'
                            ],
  templatesJsOut         :  './src/projects/stackmates/appIonic/js/templates',
  karmaTestHelpers       :  './src/projects/stackmates/appIonic/test/helpers/**/*.js',
  images                 :  [
                              './src/projects/stackmates/_shared/images/**/*'
                            ],
  fonts                  :  [ './src/common/fonts/**/*' ],
  icons                  :  [
                              './src/common/icons/**/*',
                              'src/projects/stackmates/_shared/icons/**/*'
                            ],
  data                   :  [
                              'src/projects/stackmates/_shared/data/metalsmith_out/**/*'
                            ],
  meta                   :  './src/projects/stackmates/_shared/meta',
  watchStyles            :  [
                              'src/common/style/sass/ionic/**/*.scss',
                              'src/projects/stackmates/appIonic/**/*.scss'
                            ]
};


// Decide whether to stick with sass
// or just play with variables and let ionic do it's thing and build rework on top?
