module.exports = {
  ghpages                 : 'ghpages/stackmates/appAngular',
  baseURL                 : 'app.stackmat.es',
  contentDir              : '/Users/wik/googledrive/dreams/private/stackmates/external/',
  browserifyEntry         : './src/domain/stackmates/appAngular/js/index.js',
  browserifySpecs         : './src/domain/stackmates/appAngular/js/**/*.spec.js',
  styleEntry             :  './src/domain/stackmates/appAngular/style/main.css',
  watchJS                 : './src/domain/stackmates/appAngular/js/**/*.js',
  indexHtml               : 'src/domain/stackmates/appAngular/index.html',
  jsonData                : './src/domain/stackmates/_shared/assets/data/**/*.json',
  templatesHtmlIn         : [
                              './src/domain/stackmates/appAngular/js/**/*.html',
                              './src/domain/stackmates/_shared/angular/**/*.html',
                              './src/common/ux_patterns/atoms/tooltip/angular/templates/**/*.html',
                              './src/common/ux_patterns/molecules/accordion/angular/templates/**/*.html',
                              './src/common/ux_patterns/molecules/alert/angular/templates/**/*.html',
                              './src/common/ux_patterns/molecules/carousel/angular/templates/**/*.html',
                              './src/common/ux_patterns/molecules/datepicker/angular/templates/**/*.html',
                              './src/common/ux_patterns/molecules/modal/angular/templates/**/*.html',
                              './src/common/ux_patterns/molecules/navigation/pagination/angular/templates/**/*.html',
                              './src/common/ux_patterns/molecules/navigation/tabs/angular/templates/**/*.html',
                              './src/common/ux_patterns/molecules/popup/angular/templates/**/*.html',
                              './src/common/ux_patterns/molecules/progressbar/angular/templates/**/*.html',
                              './src/common/ux_patterns/molecules/rating/angular/templates/**/*.html',
                              './src/common/ux_patterns/molecules/timepicker/angular/templates/**/*.html',
                              // './src/common/ux_patterns/molecules/typeahead/angular/templates/**/*.html',
                              // './src/common/ux_patterns/molecules/ui-select/angular/templates/**/*.html',
                              './src/common/ux_patterns/organisms/dynamic_list/angular/templates/**/*.html'
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
                              './src/domain/stackmates/_shared/assets/images/**/*'
                            ],
  fonts                   : [
                              'src/common/assets/fonts/ionicons/**/*',
                              'src/common/assets/fonts/source_sans_pro/**/*'
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
