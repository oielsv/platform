import { ReactNode } from 'react';
import { hasLocale, NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';

import { roboto } from '@/lib/fonts';

import { routing } from '@/i18n/routing';

import './globals.css';
import { ThemeProvider } from '@/components/providers/ThemeProvider';

export const revalidate = false;

export default async function LocaleLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const messages = await getMessages();

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    /* @TODO: receive "data-theme" from config */
    <html lang={locale} data-theme="brand1">
      <head>
        <link rel="icon" type="image/png" sizes="256x256" href="/favicon.ico" />
      </head>
      <body className={`${roboto.className} antialiased bg-background`}>
        <NextIntlClientProvider messages={messages}>
          <ThemeProvider>
            <div className="min-h-screen">{children}</div>
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
