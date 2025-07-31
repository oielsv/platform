import { headers as NextHeaders } from 'next/headers';

export const getOrigin = async () => {
  try {
    const headers = await NextHeaders();
    const host = headers.get('host');
    const protocol = headers.get('x-forwarded-proto') || 'https';

    if (!host) throw new Error('Missing host');

    const origin = `${protocol}://${host}`;

    return { host, protocol, headers, origin };
  } catch {
    const fallbackOrigin = process.env.NEXT_PUBLIC_DEFAULT_ORIGIN || 'http://localhost:3000';

    return {
      host: new URL(fallbackOrigin).host,
      protocol: new URL(fallbackOrigin).protocol.replace(':', ''),
      origin: fallbackOrigin,
      headers: null,
    };
  }
};
