import Border from './components/Border.vue';

declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    Border: typeof Border;
  }
}

export type BorderProps = {
  width?: number;
  height?: number;
  color?: string;
  type?: 'tech' | 'gradient' | 'neon';
};

export { Border };
