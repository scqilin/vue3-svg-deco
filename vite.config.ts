import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';
import dts from 'vite-plugin-dts';

export default defineConfig({
  plugins: [
    vue(),
    dts({
      rollupTypes: true, // 将所有声明合并到一个文件中
      tsconfigPath: './tsconfig.app.json' // 指定 TypeScript 配置文件
    })
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'Vue3SvgDeco',
      fileName: (format) => {
        if (format === 'es') return 'vue3-svg-deco.js';
        if (format === 'umd') return 'vue3-svg-deco.umd.js';
        return `vue3-svg-deco.${format}.js`;
      },
    },
    rollupOptions: {
      external: ['vue'], // 避免将 vue 打包进产物
      output: {
        globals: {
          vue: 'Vue',
        },
        exports: 'named',
      },
    },
    terserOptions: {
      compress: {
        drop_console: true, // 移除 console
        drop_debugger: true, // 移除 debugger
        pure_funcs: ['console.log'], // 可选：进一步移除 console.log
      },
      format: {
        comments: false, // 去除注释
      },
    },
    minify: 'terser', // 使用 terser 进行压缩
  },
});
