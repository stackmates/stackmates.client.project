module.exports = {
  ghpages                 : 'ghpages/stackmates/appLob',
  baseURL                 : 'app.stackmat.es',
  contentDir              : '/Users/wik/googledrive/dreams/private/stackmates/external/',
  browserifyEntry         : './src/domain/stackmates/appLob/js/index.js',
  browserifySpecs         : './src/domain/stackmates/appLob/**/*.spec.js',
  styleEntry              : './src/domain/stackmates/appLob/style/main.css',
  watchJS                 : './src/domain/stackmates/appLob/js/**/*.js',
  indexHtml               : 'src/domain/stackmates/appLob/index.html',
  jsonData                : './src/domain/stackmates/_shared/data/**/*.json',
  templatesHtmlIn         : [
                              './src/domain/stackmates/appLob/js/**/*.html',
                              './src/domain/stackmates/_shared/angular/**/*.html',
                              './src/common/ux_patterns/**/*.html',
                            ],
  templatesJsOut          : './src/domain/stackmates/appLob/js/templates',
  karmaTestHelpers        : './src/domain/stackmates/appLob/test/helpers/**/*.js',
  images                  : [
                              './src/domain/stackmates/_shared/images/**/*'
                            ],
  fonts                   : [ 'src/common/fonts/**/*' ],
  icons                   : [
                              'src/domain/stackmates/_shared/icons/**/*'
                            ],
  data                    : [
                              'src/domain/stackmates/_shared/data/metalsmith_out/**/*'
                            ],
  meta                    :  './src/domain/stackmates/_shared/meta',
  watchStyles             : [
                              './src/common/style/rework/**/*.css',
                              './src/common/ux_patterns/**/*.css',
                              './src/domain/stackmates/**/*.css'
                            ],
  handlebarsHelpers       :   '../src/domain/stackmates/_shared/templates/helpers'
}
