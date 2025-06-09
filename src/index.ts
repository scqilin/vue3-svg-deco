import type { App } from 'vue';
import { 
  BaseBorder, 
  GradientBorder, 
  AnimatedDashedBorder,
  PolygonBorder1,
  PolygonBorder2,
  PolygonBorder3,
  PolygonBorder4,
  PolygonBorder5,
  PolygonBorder6
} from './components/borders';
import { Header } from './components/headers';

const components = {
  DecoBaseBorder: BaseBorder,
  DecoGradientBorder: GradientBorder,
  DecoAnimatedDashedBorder: AnimatedDashedBorder,
  DecoPolygonBorder1: PolygonBorder1,
  DecoPolygonBorder2: PolygonBorder2,
  DecoPolygonBorder3: PolygonBorder3,
  DecoPolygonBorder4: PolygonBorder4,
  DecoPolygonBorder5: PolygonBorder5,
  DecoPolygonBorder6: PolygonBorder6,
  DecoHeader: Header
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
  AnimatedDashedBorder as DecoAnimatedDashedBorder,
  PolygonBorder1 as DecoPolygonBorder1,
  PolygonBorder2 as DecoPolygonBorder2,
  PolygonBorder3 as DecoPolygonBorder3,
  PolygonBorder4 as DecoPolygonBorder4,
  PolygonBorder5 as DecoPolygonBorder5,
  PolygonBorder6 as DecoPolygonBorder6,
  Header as DecoHeader
};
