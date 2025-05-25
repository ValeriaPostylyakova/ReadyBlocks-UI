import cssModulesPlugin from 'esbuild-css-modules-plugin'
import { defineConfig } from 'tsup'

export default defineConfig({
	entry: ['src/index.tsx'],
	format: ['esm', 'cjs'],
	sourcemap: true,
	clean: true,
	dts: true,
	tsconfig: './tsconfig.json',
	external: ['react', 'react-dom'],
	esbuildPlugins: [
		cssModulesPlugin({
			localsConvention: 'camelCaseOnly',
		}),
	],
})
