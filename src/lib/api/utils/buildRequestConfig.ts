import { ApiOptions } from '@/lib/api/models';

export function buildRequestConfig(options: ApiOptions, init: Partial<RequestInit> = {}): RequestInit {
  return {
    signal: options.signal,
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      ...options.headers,
    },
    credentials: 'include',
    next: options.next,
    cache: options.cache || 'force-cache',
    ...init,
  };
}
