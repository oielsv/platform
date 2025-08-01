import { ReactNode } from 'react';
import { hasLocale, NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';

import { roboto } from '@/lib/fonts';

import { routing } from '@/i18n/routing';

import { StoreProvider } from '@/components/providers/StoreProvider';
import { ThemeProvider } from '@/components/providers/ThemeProvider';

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
  const messages = await getMessages();

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    /* @TODO: receive "data-theme" from config */
    <html lang={locale} data-theme="default">
      <head>
        <link rel="icon" type="image/png" sizes="256x256" href="/favicon.ico" />
      </head>
      <body className={`${roboto.className} antialiased bg-background`}>
        <NextIntlClientProvider messages={messages}>
          <StoreProvider>
            <ThemeProvider>
              <div className="min-h-screen">{children}</div>
            </ThemeProvider>
          </StoreProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
