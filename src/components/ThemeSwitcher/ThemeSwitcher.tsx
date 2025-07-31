'use client';

import { Button } from '@/components/ui/button';

import { themes } from '@/components/providers/ThemeProvider/models';
import { useTheme } from '@/components/providers/ThemeProvider';

export function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="flex gap-2">
      {Object.values(themes).map((themeConfig) => (
        <Button
          key={themeConfig.name}
          onClick={() => setTheme(themeConfig.name)}
          className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
            theme === themeConfig.name
              ? 'bg-primary text-primary-foreground'
              : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
          }`}
        >
          {themeConfig.label}
        </Button>
      ))}
    </div>
  );
}
