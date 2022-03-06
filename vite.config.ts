import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// https://vitejs.dev/config/
export default defineConfig({
	plugins: [vue()],
	server: {
		proxy: {
			'/fymap2020_data.d.json':'https://interface.sina.cn/news/wap/'
		},
		port:3002
	},
	
})
