# vue3-svg-deco

Vue3 SVG装饰组件库，提供大屏展示常用的装饰元素（边框、头部、底部、角标等）

## 安装

```bash
npm install vue3-svg-deco
```

## 快速开始

```javascript
// 全局引入
import { createApp } from 'vue'
import Vue3SvgDeco from 'vue3-svg-deco'
import App from './App.vue'

const app = createApp(App)
app.use(Vue3SvgDeco)
app.mount('#app')

// 按需引入
import { Border } from 'vue3-svg-deco'
```

## 组件

### Border 边框组件

```vue
<template>
  <Border :width="500" :height="300" :strokeWidth="2" color="#3a7afe" />
</template>

<script setup>
import { Border } from 'vue3-svg-deco'
</script>
```

#### Props

| 参数  | 类型 | 默认值 | 说明 |
|-------|------|--------|------|
| width | number | 300 | 宽度 |
| height | number | 200 | 高度 |
| color | string | '#3a7afe' | 边框颜色 |
| strokeWidth| number | 2 | 边框宽度 |
## 开发

```bash
# 安装依赖
npm install

# 开发模式
npm run dev

# 构建
npm run build
```

## 计划功能

- [ ] Header 头部装饰组件
- [ ] Footer 底部装饰组件
- [ ] Corner 角标装饰组件
- [ ] 更多SVG装饰元素

## License

MIT
