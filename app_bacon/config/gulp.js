

module.exports = {
  ghpages                :  'src/domain/stackmates/bacon',
  baseURL                :  'bacon.stackmates.com',
  contentDir             :  './src/domain/stackmates/appBacon/markdown',
  browserifyEntry        :  './src/domain/stackmates/appBacon/js/index.js',
  browserifySpecs        :  './src/domain/stackmates/appBacon/js/**/*.spec.js',
  styleEntry             :  './src/domain/stackmates/_shared/style/app/app_manifest.css',
  watchJS                :  './src/domain/stackmates/appBacon/js/**/*.js',
  indexHtml              :  'src/domain/stackmates/appBacon/index.html',
  jsonData               :  './src/domain/stackmates/_shared/assets/data/**/*.json',
  templatesHtmlIn        :  [
                              './src/domain/stackmates/appBacon/templates/**/*.html',
                            ],
  templatesJsOut         :  './src/domain/stackmates/appBacon/js/templates',
  karmaTestHelpers       :  './src/domain/stackmates/appBacon/test/helpers/**/*.js',
  images                 :  [
                              './src/domain/stackmates/_shared/assets/images/**/*'
                            ],
  fonts                  :  [ 'src/common/assets/fonts/ionicons/**/*' ],
  icons                  :  [
                              // 'src/common/assets/icons/**/*',
                              'src/domain/stackmates/_shared/assets/icons/**/*'
                            ],
  data                   :  [
                              'src/domain/stackmates/_shared/assets/data/metalsmith_out/**/*'
                            ],
  meta                   :  './src/domain/stackmates/_shared/assets/meta',
  watchStyles            :  [
                              './src/common/style/rework/**/*.css',
                              './src/common/ux_patterns/style/**/*.css',
                              './src/domain/stackmates/_shared/style/**/*.css',
                              './src/domain/stackmates/appBacon/**/*.css'
                            ]
}


