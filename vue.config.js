const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  publicPath: process.env.NODE_ENV === 'production'
    ? '/Koshice0310/' // Thay tên repository của các bạn vào đây nhé
    : '/',
  transpileDependencies: [
    
  ]
})
