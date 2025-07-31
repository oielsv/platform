import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';

import { Link } from '@/i18n/navigation';

import { LocaleSwitcher } from '@/components/LocaleSwitcher';

import type { Metadata } from 'next';

type PageParamsProps = Promise<{ locale: string }>;

export default function HomePage() {
  const t = useTranslations('HomePage');

  return (
    <div>
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight text-balance">{t('title')}</h1>
      <Link href="/about">{t('about')}</Link>
      <LocaleSwitcher />
    </div>
  );
}

export async function generateMetadata({ params }: { params: PageParamsProps }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'Metadata' });

  return {
    title: t('title'),
  };
}
