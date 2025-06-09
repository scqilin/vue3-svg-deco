import type { App } from 'vue';
import { BaseBorder, GradientBorder, AnimatedDashedBorder } from './components/borders';

const components = {
  DecoBaseBorder: BaseBorder,
  DecoGradientBorder: GradientBorder,
  DecoAnimatedDashedBorder: AnimatedDashedBorder
};

export default {
  install(app: App) {
    Object.entries(components).forEach(([name, component]) => {
      app.component(name, component);
    });
  },
};

// 允许按需引入
export { 
  BaseBorder as DecoBaseBorder, 
  GradientBorder as DecoGradientBorder,
  AnimatedDashedBorder as DecoAnimatedDashedBorder 
};
