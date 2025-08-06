import { ApiOptions } from '@/lib/api/models';

export function buildUrl(baseUrl: string, path: string, options: ApiOptions): string {
  const url = new URL(path.startsWith('/') ? `${baseUrl}${path}` : path);

  if (options?.params) {
    Object.entries(options.params).forEach(([key, value]) => {
      url.searchParams.set(key, value);
    });
  }

  return url.toString();
}
