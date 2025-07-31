import { useTranslations } from 'next-intl';

import { seoBuilder, getOrigin } from '@/lib/helpers';

import { Link } from '@/i18n/navigation';

import { Button } from '@/components/ui/button';

import { LocaleSwitcher } from '@/components/LocaleSwitcher';
import { ThemeSwitcher } from '@/components/ThemeSwitcher';

import type { Metadata } from 'next';

type PageParamsProps = Promise<{ locale: string }>;

export default function HomePage() {
  const t = useTranslations('HomePage');

  return (
    <div>
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight text-balance">{t('title')}</h1>
      <Link href="/about">{t('about')}</Link>
      <LocaleSwitcher />

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Theme Switcher</h2>
        <ThemeSwitcher />
      </div>

      <div className="space-y-4">
        <Button>Primary Button</Button>
        <Button variant="secondary">Secondary Button</Button>
        <Button variant="outline">Outline Button</Button>
        <Button variant="destructive">Destructive Button</Button>
      </div>
    </div>
  );
}

export async function generateMetadata({ params }: { params: PageParamsProps }): Promise<Metadata> {
  const { locale } = await params;
  const { origin } = await getOrigin();

  const [meta] = await Promise.all([seoBuilder.defineMetadata({ locale, origin })]);

  return {
    ...meta,
  };
}
