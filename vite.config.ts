import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [vue(), vueJsx()],
	base: '/yuja0529.github.io/',
	resolve: {
		alias: {
			'@': fileURLToPath(new URL('./src', import.meta.url)),
			'~': fileURLToPath(new URL('./public', import.meta.url))
		}
	}
})
