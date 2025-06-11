# vue3-svg-deco

Vue3 SVG 装饰组件库，专为数据大屏、仪表盘等场景设计，提供丰富的 SVG 边框、头部等装饰元素。

## 安装

```bash
npm install vue3-svg-deco
```

## 快速开始

### 全局引入

```javascript
import { createApp } from 'vue'
import Vue3SvgDeco from 'vue3-svg-deco'
import App from './App.vue'

const app = createApp(App)
app.use(Vue3SvgDeco)
app.mount('#app')
```

### 按需引入

推荐按需引入：

```javascript
import { BaseBorder, GradientBorder, RectBorder, Header, PolygonBorder1 } from 'vue3-svg-deco'
```

## 组件用法

### Header 头部装饰组件

```vue
<template>
  <Header 
    title="数据大屏" 
    color1="#3a7afe" 
    color2="#00f9ff"
    textColor="#fff"
    lineColor="#fff"
    fontSize="24px"
    :radius="18"
    :angle="0"
    gradientType="linear"
    :radialCenterX="50"
    :radialCenterY="50"
    :radialRadius="40"
  />
</template>

<script setup>
import { Header } from 'vue3-svg-deco'
</script>
```

#### Header Props
| 参数 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| title | string | '' | 标题文本 |
| color1 | string | '#3a7afe' | 渐变色1 |
| color2 | string | '#00f9ff' | 渐变色2 |
| textColor | string | '#fff' | 标题颜色 |
| lineColor | string | '#fff' | 线条颜色 |
| fontSize | string | '24px' | 字体大小 |
| radius | number | 18 | 圆角半径 |
| angle | number | 0 | 渐变角度 |
| gradientType | 'linear'\|'radial' | 'linear' | 渐变类型 |
| radialCenterX | number | 50 | 径向渐变中心X |
| radialCenterY | number | 50 | 径向渐变中心Y |
| radialRadius | number | 40 | 径向渐变半径 |

---

### BaseBorder 基础边框组件

```vue
<template>
  <BaseBorder :width="500" :height="300" :strokeWidth="2" stroke="#3a7afe" fill="none" :cornerLen="20" :dur="'6s'" />
</template>

<script setup>
import { BaseBorder } from 'vue3-svg-deco'
</script>
```

#### BaseBorder Props
| 参数 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| width | number | 300 | 宽度 |
| height | number | 200 | 高度 |
| cornerLen | number | 20 | 四角长度 |
| fill | string | 'none' | 填充色 |
| stroke | string | '#3a7afe' | 边框颜色 |
| strokeWidth | number | 2 | 边框宽度 |
| dur | string | '6s' | 动画时长 |
| strokeDasharray | string | '' | 虚线样式 |
| dashoffsetValues | string | '' | 虚线动画关键帧 |
| round | 'round'\|'square'\|'butt' | 'round' | 线帽样式 |
| colors | string[] | [] | 渐变色数组 |

---

### GradientBorder 渐变边框组件

```vue
<template>
  <GradientBorder :width="400" :height="200" :strokeWidth="3" :colors="['#ff0000', '#00ffff']" :angle="45" :dur="'5s'" />
</template>

<script setup>
import { GradientBorder } from 'vue3-svg-deco'
</script>
```

#### GradientBorder Props
| 参数 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| width | number | 300 | 宽度 |
| height | number | 200 | 高度 |
| rx | number | 0 | x方向圆角 |
| ry | number | 0 | y方向圆角 |
| fill | string | 'none' | 填充色 |
| stroke | string | '#3a7afe' | 边框颜色 |
| strokeWidth | number | 2 | 边框宽度 |
| dur | string | '6s' | 动画时长 |
| strokeDasharray | string | '' | 虚线样式 |
| dashoffsetValues | string | '' | 虚线动画关键帧 |
| round | 'round'\|'square'\|'butt' | 'round' | 线帽样式 |
| colors | string[] | [] | 渐变色数组 |
| angle | number | 0 | 渐变角度 |

---

### 多边形边框组件

组件名：`PolygonBorder1` ~ `PolygonBorder10`

```vue
<template>
  <PolygonBorder1 :width="400" :height="200" :bevelSize="15" :strokeWidth="2" stroke="#3a7afe" />
</template>

<script setup>
import { PolygonBorder1 } from 'vue3-svg-deco'
</script>
```

#### PolygonBorder Props（所有多边形边框通用）
| 参数 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| width | number | 300 | 宽度 |
| height | number | 200 | 高度 |
| bevelSize | number | 10 | 斜切/圆角尺寸 |
| points | string | '' | 多边形点坐标（部分组件用） |
| fill | string | 'none' | 填充色 |
| stroke | string | '#3a7afe' | 边框颜色 |
| strokeWidth | number | 2 | 边框宽度 |
| dur | string | '6s' | 动画时长 |
| strokeDasharray | string | '' | 虚线样式 |
| dashoffsetValues | string | '' | 虚线动画关键帧 |
| round | 'round'\|'square'\|'butt' | 'round' | 线帽样式 |
| colors | string[] | [] | 渐变色数组 |

---

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

- [x] Header 头部装饰组件
- [x] 多种 SVG 边框组件
- [ ] Footer 底部装饰组件
- [ ] Corner 角标装饰组件
- [ ] 更多 SVG 装饰元素

## License

MIT
