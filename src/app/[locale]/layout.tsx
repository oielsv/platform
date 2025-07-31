import { ReactNode } from 'react';
import { hasLocale, NextIntlClientProvider } from 'next-intl';
import { notFound } from 'next/navigation';

import { inter } from '@/lib/fonts';

import { routing } from '@/i18n/routing';

import './globals.css';

export const revalidate = false;

export default async function LocaleLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <html lang={locale}>
      <head>
        <link rel="icon" type="image/png" sizes="256x256" href="/favicon.ico" />
      </head>
      <body className={`${inter.variable} antialiased bg-background`}>
        <NextIntlClientProvider>
          <div className="min-h-screen">{children}</div>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
