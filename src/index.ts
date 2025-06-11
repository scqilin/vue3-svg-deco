import type { App } from 'vue';
import type { Component } from 'vue';
import * as borders from '@/components/borders';
import * as headers from '@/components/headers';

type ComponentEntry = [string, Component];

/**
 * Vue3 SVG装饰组件库
 * 包含各种SVG边框、图形和装饰组件
 */
export default {
  install(app: App) {
    // 自动注册所有组件
    const components: ComponentEntry[] = [
      ...Object.entries(borders),
      ...Object.entries(headers),
    ] as ComponentEntry[];

    components.forEach(([name, component]) => {
      app.component(name, component);
    });
  }
};

// 导出所有组件和类型
export * from '@/components/borders';
export * from '@/components/headers';
