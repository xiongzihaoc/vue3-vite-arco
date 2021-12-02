import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

export default defineConfig({
  plugins: [vue()],
  server: {
    open: false, // 自动打开浏览器
    port: 8088, // 端口号

  },
  resolve: {
    // 目录别名
    alias: {
      '@': path.resolve(__dirname, 'src'),
    }
  }
})
