

module.exports = {
  ghpages                 :   'ghpages/stackmates/home',
  baseURL                 :   'stackmat.es',
  contentDir              :   '/Users/wik/googledrive/dreams/public/stackmates/external/',
  sheets                  :   ['1x0Fy072BB8hYg2d1j9xpOTG8AW1qHPQo6bENY-0Vx78'],
  browserifyEntry         :   './src/projects/stackmates/siteHome/js/index.js',
  styleEntry              :   './src/projects/stackmates/siteHome/style/main.css',
  images                  :   [ './src/projects/stackmates/common/images/**/*' ],
  fonts                   :   [ 'src/common/fonts/**/*' ],
  icons                   :   [
                                'src/common/icons/**/*',
                                'src/projects/stackmates/_shared/icons/**/*'
                              ],
  data                    :   [
                                // 'src/common/data/**/*',
                                'src/projects/stackmates/_shared/data/metalsmith_in'
                              ],
  dataOut                 :   './src/projects/stackmates/_shared/data/metalsmith_out',
  meta                    :   './src/projects/stackmates/_shared/meta',
  watchScripts            :   [
                                './src/common/util_modules/**/*.js',
                                './src/common/ux_patterns/**/*.js',
                                './src/projects/stackmates/**/*.js'
                              ],
  watchStyles             :   [
                                './src/common/style/rework/**/*.css',
                                './src/common/ux_patterns/**/*.css',
                                './src/projects/stackmates/**/*.css'
                              ],
  fetchSitePartials       :   [
                                './src/projects/stackmates/_shared/templates/partials/**/*.hbs'
                              ],
  fetchSitePages          :   [
                                './src/projects/stackmates/_shared/templates/pages/**/*.hbs'
                              ],
  metalsmithCollections   :   {
                                sheets: { pattern: 'sheets.json' },
                                externalProvoke: { pattern: 'haiku/_loop_external/provoke/*.md', sortBy: 'flow' },
                                externalAffirm: { pattern: 'haiku/_loop_external/affirm/*.md', sortBy: 'flow' },
                                internalProvoke: { pattern: 'haiku/_loop_internal/provoke/*.md', sortBy: 'flow' },
                                internalAffirm: { pattern: 'haiku/_loop_internal/affirm/*.md', sortBy: 'flow' },
                                problems: { pattern: 'philosophy/problems/details/*.md', sortBy: 'belief', reverse: true }
                              }
}
