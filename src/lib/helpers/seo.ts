import { Metadata } from 'next';
import { OpenGraph } from 'next/dist/lib/metadata/types/opengraph-types';
import { getTranslations } from 'next-intl/server';

export const seoBuilder = {
  async defineMetadata({
    locale,
    origin,
    prefix,
    path,
  }: {
    locale?: string;
    origin: string;
    prefix?: string;
    path?: string;
  }): Promise<{
    title: Metadata['title'];
    description: Metadata['description'];
    openGraph: OpenGraph;
    twitter: {};
  }> {
    const t = await getTranslations('metadata');
    const getKey = (key: string) => (prefix ? `${prefix}.${key}` : key);

    const ogMeta: OpenGraph = {
      title: t(getKey('openGraphTitle')),
      description: t(getKey('openGraphDescription')),
      images: [],
      type: 'website',
      siteName: [origin, locale && `/${locale}`, path && `/${path}`].filter(Boolean).join(''),
    };

    return {
      title: t(getKey('title')),
      description: t(getKey('description')),
      openGraph: ogMeta,
      twitter: {
        ...ogMeta,
        card: 'summary_large_image',
        site: '@vbet',
      },
    };
  },
};
