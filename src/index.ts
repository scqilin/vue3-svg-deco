import { App } from 'vue';
import { BaseBorder, GradientBorder } from './components/borders';

const components = {
  BaseBorder,
  GradientBorder
};

export default {
  install(app: App) {
    Object.entries(components).forEach(([name, component]) => {
      app.component(name, component);
    });
  },
};

// 允许按需引入
export { BaseBorder, GradientBorder };
