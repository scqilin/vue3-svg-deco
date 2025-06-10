import type { PropType } from 'vue';

// 基础props
export const baseGraphProps = {
  width: { type: Number, default: 300 }, // 宽度
  height: { type: Number, default: 200 }, // 高度
  fill: { type: String, default: 'none' },
  stroke: { type: String, default: '#00f9ff' },
  strokeWidth: { type: Number, default: 1 },
  dur: { type: String, default: '0' },
  strokeDasharray: { type: String, default: '0,0' },
  dashoffsetValues: { type: String, default: '0;-100' },
  round: { type: String as PropType<'round' | 'square' | 'butt' | undefined>, default: 'round' },
  colors: {type: Array as PropType<string[]>, default: ['#00f9ff','#ff00ff']} // 
};

// 矩形props
export const rectProps = {
  width: { type: Number, default: 300 },
  height: { type: Number, default: 200 },
  rx: { type: Number, default: 0 },
  ry: { type: Number, default: 0 }
};

// 圆形props
export const circleProps = {
  cx: { type: Number, default: 50 },
  cy: { type: Number, default: 50 },
  r: { type: Number, default: 40 }
};

// 椭圆props
export const ellipseProps = {
  cx: { type: Number, default: 50 },
  cy: { type: Number, default: 50 },
  rx: { type: Number, default: 40 },
  ry: { type: Number, default: 20 }
};

// 线段props
export const lineProps = {
  x1: { type: Number, default: 0 },
  y1: { type: Number, default: 10 },
  x2: { type: Number, default: 300 },
  y2: { type: Number, default: 10 }
};

// 多边形props
export const polygonProps = {
  points: { type: String, default: '3.55,81.35 3.55,3.39 106.64,3.39 113.75,10.74 295.93,10.74 300,13.56 300,196.61 135.57,196.61 131.48,192.23 3.55,192.23 3.55,81.35' }
};

// 折线props
export const polylineProps = {
  points: { type: String, default: '10,40 10,30 20,20 100,20 110,30 282,30 292,40' }
};

// 路径props
export const pathProps = {
  d: { type: String, default: 'M 20 60 L 20 15 L 27 8 L 95 8 L 102 15 L 285 15 L 290 20 L 290 180 L 230 180 L 223 187 L 13 187 L 10 184 L 10 60' }
};
