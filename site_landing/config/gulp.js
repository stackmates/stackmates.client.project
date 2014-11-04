module.exports = {
  ghpages                 :   'ghpages/dreamineering/landing',
  baseURL                 :   'landing.dreamineering.com',
  contentDir              :   './src/domain/dreamineering/siteLanding/markdown/',
  sheets                  :   ['18DBzR_PPd06WmQfv6Ky_pa81-opNKahykcDzBIlzhdM'],
  browserifyEntry         :   './src/domain/dreamineering/siteLanding/js/index.js',
  styleEntry              :   './src/domain/dreamineering/siteLanding/style/main.css',
  images                  :   [ './src/domain/dreamineering/common/images/**/*' ],
  fonts                   :   [
                                'src/common/fonts/ionicons/**/*'
                              ],
  icons                   :   [
                                'src/common/icons/**/*',
                                'src/domain/dreamineering/_shared/icons/**/*'
                              ],
  data                    :   [
                                'src/domain/dreamineering/_shared/data/metalsmith_in'
                              ],
  dataOut                 :   './src/domain/dreamineering/_shared/data/metalsmith_out',
  meta                    :   './src/domain/dreamineering/_shared/meta',
  watchScripts            :   [
                                './src/common/util_modules/**/*.js',
                                './src/common/ux_patterns/**/*.js',
                                './src/domain/dreamineering/siteLanding/js/**/*.js'
                              ],
  watchStyles             :   [
                                './src/common/style/rework/**/*.css',
                                './src/common/ux_patterns/**/*.css',
                                './src/domain/dreamineering/**/*.css'
                              ],
  templates               :   [
                                './src/domain/dreamineering/_shared/templates'
                              ],
  handlebarsHelpers       :     '../src/domain/dreamineering/_shared/templates/helpers',
  metalsmithTemplates     :   {
                                engine:      'handlebars',
                                directory:   '../src/domain/dreamineering/_shared/templates'
                              },
  metalsmithCollections   :   {
                                sheets: { pattern: 'sheets.json' }
                              }
}
