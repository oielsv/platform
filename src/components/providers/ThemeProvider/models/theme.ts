export type Theme = 'brand0' | 'brand1' | 'brand2' | 'default';

export interface ThemeConfig {
  name: Theme;
  label: string;
  colors: {
    primary: string;
    secondary: string;
    accent: string;
    // Add more color variations as needed
  };
}

export const themes: Record<Theme, ThemeConfig> = {
  default: {
    name: 'default',
    label: 'Default',
    colors: {
      primary: 'oklch(0.205 0 0)',
      secondary: 'oklch(0.97 0 0)',
      accent: 'oklch(0.97 0 0)',
    },
  },
  brand0: {
    name: 'brand0',
    label: 'Brand 0',
    colors: {
      primary: 'oklch(0.488 0.243 264.376)', // Purple
      secondary: 'oklch(0.97 0 0)',
      accent: 'oklch(0.269 0 0)',
    },
  },
  brand1: {
    name: 'brand1',
    label: 'Brand 1',
    colors: {
      primary: 'oklch(0.646 0.222 41.116)', // Orange
      secondary: 'oklch(0.97 0 0)',
      accent: 'oklch(0.269 0 0)',
    },
  },
  brand2: {
    name: 'brand2',
    label: 'Brand 2',
    colors: {
      primary: 'oklch(0.6 0.118 184.704)', // Blue
      secondary: 'oklch(0.97 0 0)',
      accent: 'oklch(0.269 0 0)',
    },
  },
};

export function setTheme(theme: Theme) {
  if (typeof document !== 'undefined') {
    document.documentElement.setAttribute('data-theme', theme);
  }
}

export function getCurrentTheme(): Theme {
  if (typeof document !== 'undefined') {
    return (document.documentElement.getAttribute('data-theme') as Theme) || 'default';
  }
  return 'default';
}
