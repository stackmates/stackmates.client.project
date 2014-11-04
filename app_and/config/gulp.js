

module.exports = {
  ghpages                :  'src/domain/stackmates/and',
  baseURL                :  'and.stackmates.com',
  contentDir             :  '',
  browserifyEntry        :  './src/domain/stackmates/appAnd/js/index.js',
  browserifySpecs        :  './src/domain/stackmates/appAnd/**/*.spec.js',
  styleEntry             :  './src/domain/stackmates/_shared/style/app/app_manifest.css',
  watchJS                :  './src/domain/stackmates/appAnd/js/**/*.js',
  indexHtml              :  'src/domain/stackmates/appAnd/index.html',
  jsonData               :  './src/domain/stackmates/_shared/assets/data/**/*.json',
  templatesHtmlIn        :  [
                            ],
  templatesJsOut         :  './src/domain/stackmates/appAnd/js/templates',
  karmaTestHelpers       :  './src/domain/stackmates/appAnd/test/helpers/**/*.js',
  images                 :  [
                              './src/domain/stackmates/_shared/images/**/*'
                            ],
  fonts                  :  [
                              'src/common/assets/fonts/ionicons/**/*',
                              'src/common/assets/fonts/source_sans_pro/**/*'
                            ],
  icons                  :  [
                              'src/domain/stackmates/_shared/assets/icons/**/*'
                            ],
  data                   :  [
                              'src/domain/stackmates/_shared/data/metalsmith_out/**/*'
                            ],
  meta                   :  './src/domain/stackmates/_shared/assets/meta',
  watchStyles            :  [
                              './src/common/style/rework/**/*.css',
                              './src/common/ux_patterns/**/*.css',
                              './src/domain/stackmates/**/*.css'
                            ]
}


