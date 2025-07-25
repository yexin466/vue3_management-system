import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// import { viteMockServe } from 'vite-plugin-mock'
// import AutoImport from 'unplugin-auto-import/vite'
// import Components from 'unplugin-vue-components/vite'
// import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
// import ElementPlus from 'unplugin-element-plus/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    // ElementPlus(),
    //  // ...
    //  AutoImport({
    //   resolvers: [ElementPlusResolver()],
    // }),
    // Components({
    //   resolvers: [ElementPlusResolver()],
    // }),
  //   viteMockServe({
  //     mockPath: 'mock',
  //     localEnabled: true, // 设置是否监视mockPath对应的文件夹内文件中的更改
  //     prodEnabled: false, // 设置是否启用生产环境的mock服务
  //     watchFiles: true, // 是否监视文件更改
  //     logger: true  //是否在控制台
  //   })
  ],
 
  resolve:{
    alias:[
      {
        find: "@", replacement: "/src",
        // '@': fileURLToPath(new URL('./SRC', import.meta.url))
      }
    ]
  }
})
