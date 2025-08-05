import { useTranslations } from 'next-intl';

import { seoBuilder, getOrigin } from '@/lib/helpers';

import { Link } from '@/i18n/navigation';

import { Button } from '@/components/ui/button';

import { LocaleSwitcher } from '@/components/LocaleSwitcher';
import { ThemeSwitcher } from '@/components/ThemeSwitcher';
import { Footer } from '@/components/Footer';

import type { Metadata } from 'next';

type PageParamsProps = Promise<{ locale: string }>;

const footerConfig = {
  links: {
    products: {
      title: 'products',
      items: [
        {
          label: 'Online Slots',
          target: '_self',
          href: '/casino/slots',
        },
        {
          label: 'Online casino games',
          target: '_self',
          href: '/games',
        },
        {
          label: 'Poker online',
          target: '_self',
          href: '/page/casino/poker/28',
        },
        {
          label: 'Online sports betting',
          target: '_self',
          href: '/sports/pre-match/event-view',
        },
        {
          label: 'Esports betting',
          target: '_self',
          href: '/esports',
        },
        {
          label: 'Live casino online',
          target: '_self',
          href: '/live-casino/home',
        },
        {
          label: 'Online roulette',
          target: '_self',
          // eslint-disable-next-line max-len
          href: '/casino/game-view/141417/%D0%BD%D0%BE%D0%BD%D1%81%D1%82%D0%BE%D0%BF-%D1%80%D1%83%D0%BB%D0%B5%D1%82%D0%BA%D0%B0',
        },
      ],
    },
    help: {
      title: 'help',
      items: [
        {
          label: 'About us',
          target: '_self',
          href: '/help/16137',
        },

        {
          label: 'FAQ',
          target: '_self',
          href: '/help/16139',
        },
        {
          label: 'Contact Us',
          target: '_self',
          href: '/help/16140',
        },
      ],
    },
  },
};

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

      {/* @ts-ignore */}
      <Footer config={footerConfig} />
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
