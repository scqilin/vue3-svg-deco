import { BaseBorder, GradientBorder } from './components/borders';

declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    BaseBorder: typeof BaseBorder;
    GradientBorder: typeof GradientBorder;
  }
}

// export type BorderProps = {
//   width?: number;
//   height?: number;
//   color?: string;
//   color2?: string;
//   strokeWidth?: number;
// };

export { BaseBorder, GradientBorder };
