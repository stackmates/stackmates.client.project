

module.exports = {
  ghpages                :  './ghpages/stackmates/mobile',
  baseURL                :  'mob.stackmat.es',
  contentDir             :  '/Users/wik/googledrive/dreams/private/stackmates/external/',
  browserifyEntry        :  './src/domain/stackmates/appIonic/js/index.js',
  browserifySpecs        :  './src/domain/stackmates/appIonic/**/*.spec.js',
  cordova                :  './src/domain/stackmates/appIonic/cordova/**/*',
  styleEntry             :  './src/domain/stackmates/appIonic/style/ionic.app.scss',
  watchJS                :  './src/domain/stackmates/appIonic/js/**/*.js',
  indexHtml              :  './src/domain/stackmates/appIonic/index.html',
  jsonData               :  './src/domain/stackmates/appIonic/data/**/*.json',
  templatesHtmlIn        :  [
                              './src/domain/stackmates/appIonic/js/**/*.html',
                              './src/domain/stackmates/_shared/angular/**/*.html'
                            ],
  templatesJsOut         :  './src/domain/stackmates/appIonic/js/templates',
  karmaTestHelpers       :  './src/domain/stackmates/appIonic/test/helpers/**/*.js',
  images                 :  [
                              './src/domain/stackmates/_shared/images/**/*'
                            ],
  fonts                  :  [
                              './src/common/fonts/ionicons/**/*'
                            ],
  icons                  :  [
                              './src/common/icons/**/*',
                              'src/domain/stackmates/_shared/icons/**/*'
                            ],
  data                   :  [
                              'src/domain/stackmates/_shared/data/metalsmith_out/**/*'
                            ],
  meta                   :  './src/domain/stackmates/_shared/meta',
  watchStyles            :  [
                              'src/common/style/sass/ionic/**/*.scss',
                              'src/domain/stackmates/appIonic/**/*.scss'
                            ],
  handlebarsHelpers       :   '../src/domain/stackmates/_shared/templates/helpers'
};


// Decide whether to stick with sass
// or just play with variables and let ionic do it's thing and build rework on top?
