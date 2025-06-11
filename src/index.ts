import './main.css';
import type { App } from 'vue';
import type { Component } from 'vue';
import * as borders from '@/components/borders';
import * as headers from '@/components/headers';

type ComponentEntry = [string, Component];

export default {
  install(app: App) {
    const components: ComponentEntry[] = [
      ...Object.entries(borders),
      ...Object.entries(headers),
    ] as ComponentEntry[];

    components.forEach(([name, component]) => {
      app.component(name, component);
    });
  }
};

export * from '@/components/borders';
export * from '@/components/headers';
