module.exports = {
  // ghpages              :   'ghpages/stackmates/home',
  ghpages                 :   './src/domain/stackmates/_deploy/siteHome',
  baseURL                 :   'stackmat.es',
  contentDir              :   './src/domain/stackmates/siteHome/markdown/',
  sheets                  :   ['1x0Fy072BB8hYg2d1j9xpOTG8AW1qHPQo6bENY-0Vx78'],
  browserifyEntry         :   './src/domain/stackmates/siteHome/js/index.js',
  styleEntry              :   './src/domain/stackmates/siteHome/style/main.css',
  images                  :   [ './src/domain/stackmates/common/images/**/*' ],
  fonts                   :   [
                                'src/common/assets/fonts/ionicons/**/*',
                                'src/common/assets/fonts/source_sans_pro/**/*'
                              ],
  icons                   :   [
                                'src/common/assets/icons/**/*',
                                'src/domain/stackmates/_shared/assets/icons/**/*'
                              ],
  data                    :   [
                                'src/domain/stackmates/_shared/assets/data/metalsmith_in'
                              ],
  dataOut                 :   './src/domain/stackmates/_shared/assets/data/metalsmith_out',
  meta                    :   './src/domain/stackmates/_shared/assets/meta',
  watchScripts            :   [
                                './src/common/util_modules/**/*.js',
                                './src/common/ux_patterns/**/*.js',
                                './src/domain/stackmates/siteHome/**/*.js'
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
                                sheets: {
                                  pattern: 'sheets.json' },
                                externalProvoke: {
                                  pattern: 'cards/_loop_external/provoke/*.md',
                                  sortBy: 'flow' },
                                externalAffirm: {
                                  pattern: 'cards/_loop_external/affirm/*.md',
                                  sortBy: 'flow' },
                                internalProvoke: {
                                  pattern: 'cards/_loop_internal/provoke/*.md',
                                  sortBy: 'flow' },
                                internalAffirm: {
                                  pattern: 'cards/_loop_internal/affirm/*.md',
                                  sortBy: 'flow' }
                              }
}
