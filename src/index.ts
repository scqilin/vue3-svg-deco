import type { App } from 'vue';
import { 
  BaseBorder, GradientBorder, RectBorder,
  PolygonBorder1, PolygonBorder2, PolygonBorder3, PolygonBorder4, PolygonBorder5, PolygonBorder6,
  PolygonBorder7, PolygonBorder8, PolygonBorder9, PolygonBorder10
} from '@/components/borders';
import { Header } from '@/components/headers';

const components = {
  DecoBaseBorder: BaseBorder,
  DecoRectBorder: RectBorder,
  DecoGradientBorder: GradientBorder,
  DecoPolygonBorder1: PolygonBorder1,
  DecoPolygonBorder2: PolygonBorder2,
  DecoPolygonBorder3: PolygonBorder3,
  DecoPolygonBorder4: PolygonBorder4,
  DecoPolygonBorder5: PolygonBorder5,
  DecoPolygonBorder6: PolygonBorder6,
  DecoPolygonBorder7: PolygonBorder7,
  DecoPolygonBorder8: PolygonBorder8,
  DecoPolygonBorder9: PolygonBorder9,
  DecoPolygonBorder10: PolygonBorder10,
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
  BaseBorder,
  RectBorder,
  GradientBorder,
  PolygonBorder1,
  PolygonBorder2,
  PolygonBorder3,
  PolygonBorder4,
  PolygonBorder5,
  PolygonBorder6,
  PolygonBorder7,
  PolygonBorder8,
  PolygonBorder9,
  PolygonBorder10,
  Header
};
