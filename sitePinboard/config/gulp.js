module.exports = {
  ghpages                 :   'ghpages/stackmates/landing',
  baseURL                 :   'landing.stackmat.es',
  contentDir              :   './src/domain/stackmates/siteLanding/markdown/',
  sheets                  :   ['18DBzR_PPd06WmQfv6Ky_pa81-opNKahykcDzBIlzhdM'],
  browserifyEntry         :   './src/domain/stackmates/siteLanding/js/index.js',
  styleEntry              :   './src/domain/stackmates/siteLanding/style/main.css',
  images                  :   [ './src/domain/stackmates/common/images/**/*' ],
  fonts                   :   [ 'src/common/fonts/**/*' ],
  icons                   :   [
                                'src/common/icons/**/*',
                                'src/domain/stackmates/_shared/icons/**/*'
                              ],
  data                    :   [
                                'src/domain/stackmates/_shared/data/metalsmith_in'
                              ],
  dataOut                 :   './src/domain/stackmates/_shared/data/metalsmith_out',
  meta                    :   './src/domain/stackmates/_shared/meta',
  watchScripts            :   [
                                './src/common/util_modules/**/*.js',
                                './src/common/ux_patterns/**/*.js',
                                './src/domain/stackmates/siteLanding/js/**/*.js'
                              ],
  watchStyles             :   [
                                './src/common/style/rework/**/*.css',
                                './src/common/ux_patterns/**/*.css',
                                './src/domain/stackmates/**/*.css'
                              ],
  templates               :   [
                                './src/domain/stackmates/_shared/templates'
                              ],
  handlebarsHelpers       :     '../src/domain/stackmates/_shared/templates/helpers',
  metalsmithTemplates     :   {
                                engine:      'handlebars',
                                directory:   '../src/domain/stackmates/_shared/templates'
                              },
  metalsmithCollections   :   {
                                sheets: { pattern: 'sheets.json' }
                              }
}
