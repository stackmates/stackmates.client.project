module.exports = {
  // ghpages                 : 'ghpages/stackmates/appAngular',
  ghpages                 : './src/domain/stackmates/_deploy/appAngular',
  baseURL                 : 'app.stackmat.es',
  contentDir              : '/Users/wik/googledrive/dreams/private/stackmates/external/',
  browserifyEntry         : './src/domain/stackmates/appAngular/js/index.js',
  browserifySpecs         : './src/domain/stackmates/appAngular/js/**/*.spec.js',
  styleEntry             :  './src/domain/stackmates/appAngular/style/main.css',
  watchJS                 : './src/domain/stackmates/appAngular/js/**/*.js',
  indexHtml               : 'src/domain/stackmates/appAngular/index.html',
  jsonData                : './src/domain/stackmates/_shared/assets/data/**/*.json',
  templatesHtmlIn         : [
                              './src/common/ux_patterns/molecules/ui-select/angular/directives/templates/**/*.html',
                              './src/common/ux_patterns/molecules/lists/dynamic_list/angular/directives/**/*.html'
                            ],
  templatesJsOut          : './src/domain/stackmates/appAngular/js/templates',
  karmaTestHelpers        : [
                              'node_modules/jquery/dist/jquery.js',
                              'node_modules/bower_components/angular/angular.js',
                              'node_modules/bower_components/angular-mocks/angular-mocks.js',
                              './test/helpers/**/*.js',
                              'build/test/bundle-tests.js'
                            ],
  images                  : [
                              './src/common/assets/images/select2/**/*',
                              './src/domain/stackmates/_shared/assets/images/**/*'
                            ],
  fonts                   : [
                              'src/common/assets/fonts/ionicons/**/*',
                              'src/common/assets/fonts/source_sans_pro/**/*',
                              'src/common/assets/fonts/glyphicons/**/*'
                            ],
  icons                   : [
                              'src/domain/stackmates/_shared/assets/icons/**/*'
                            ],
  data                    : [
                              'src/domain/stackmates/_shared/assets/data/metalsmith_out/**/*'
                            ],
  meta                    :  './src/domain/stackmates/_shared/assets/meta',
  watchStyles             : [
                              './src/common/style/rework/**/*.css',
                              './src/common/ux_patterns/style/**/*.css',
                              './src/domain/stackmates/_shared/style/**/*.css',
                              './src/domain/stackmates/appAngular/**/*.css'
                            ],
  handlebarsHelpers       :   '../src/domain/stackmates/_shared/templates/helpers'
}
