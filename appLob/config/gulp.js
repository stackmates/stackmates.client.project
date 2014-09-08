

module.exports = {
  ghpages                :  'ghpages/stackmates/appLob',
  baseURL                :  'app.stackmates.com',
  contentDir             :  '/Users/wik/googledrive/dreams/private/stackmates/external/',
  browserifyEntry        :  './src/projects/stackmates/appLob/js/index.js',
  browserifySpecs        :  './src/projects/stackmates/appLob/**/*.spec.js',
  styleEntry             :  './src/projects/stackmates/appLob/style/main.css',
  watchJS                :  './src/projects/stackmates/appLob/js/**/*.js',
  indexHtml              :  'src/projects/stackmates/appLob/index.html',
  jsonData               :  './src/projects/stackmates/_shared/data/**/*.json',
  templatesHtmlIn        :  [
                              './src/projects/stackmates/appLob/js/**/*.html',
                              './src/projects/stackmates/_shared/angular/**/*.html',
                              './src/common/ux_patterns/**/*.html',
                            ],
  templatesJsOut         :  './src/projects/stackmates/appLob/js/templates',
  karmaTestHelpers       :  './src/projects/stackmates/appLob/test/helpers/**/*.js',
  images                 :  [
                              './src/projects/stackmates/_shared/images/**/*'
                            ],
  fonts                  :  [ 'src/common/fonts/**/*' ],
  icons                  :  [
                              // 'src/common/icons/**/*',
                              'src/projects/stackmates/_shared/icons/**/*'
                            ],
  data                   :  [
                              'src/projects/stackmates/_shared/data/metalsmith_out/**/*'
                            ],
  meta                   :  './src/projects/stackmates/_shared/meta',
  watchStyles            :  [
                              './src/common/style/rework/**/*.css',
                              './src/common/ux_patterns/**/*.css',
                              './src/projects/stackmates/**/*.css'
                            ]
}
