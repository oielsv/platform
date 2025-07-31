import { ReactNode } from 'react';

import { inter } from '@/lib/fonts';

import './globals.css';

export const revalidate = false;

export default async function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/png" sizes="256x256" href="/favicon.ico" />
      </head>
      <body className={`${inter.variable} antialiased bg-background`}>
        <div className="min-h-screen">{children}</div>
      </body>
    </html>
  );
}
