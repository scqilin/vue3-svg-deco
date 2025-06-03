import { App } from 'vue';
import Border from './components/Border.vue';

const components = {
  Border
};

export default {
  install(app: App) {
    Object.entries(components).forEach(([name, component]) => {
      app.component(name, component);
    });
  },
};

// 允许按需引入
export { Border };
