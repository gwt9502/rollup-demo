import babel from 'rollup-plugin-babel'
import { uglify } from 'rollup-plugin-uglify'
import typescript from 'rollup-plugin-typescript'
import postcss from 'rollup-plugin-postcss'
import cssnano from 'cssnano'
import cssnext from 'postcss-cssnext'
import template from 'rollup-plugin-generate-html-template'
import serve from 'rollup-plugin-serve'
import livereload from 'rollup-plugin-livereload'
import { name } from './package.json'
import { resolve } from 'path'

const isProduction = process.env.NODE_ENV === 'production'

const Plugins = isProduction ? [uglify()] : [serve('dist'), livereload('dist')]

export default {
  input: './src/entry.ts',
  output: {
    file: `./dist/${name}.js`,
    format: 'esm',
  },
  watch: {
    include: 'src/**'
  },
  plugins: [
    postcss({
      plugins: [cssnext, cssnano],
      extract: resolve(__dirname, `./dist/${name}.css`) // 输出路径
    }),
    typescript(),
    babel({
      exclude: 'node_modules/**'
    }),
    template({
      template: './index.html',
      target: './dist/index.html',
      replaceVars: {
        '__STYLE_URL__': `${name}.css`
      }
    }),
    ...Plugins,
  ]
}
