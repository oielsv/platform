import { ApiOptions, HttpResponse } from '@/lib/api/models';
import { buildRequestConfig, buildUrl, executeRequest } from '@/lib/api/utils';

interface ApiClient {
  get<R>(path: string, options: ApiOptions): Promise<HttpResponse<R>>;
}

export const createApiClient = (baseUrl: string): ApiClient => ({
  async get<R>(path: string, options: ApiOptions = {}): Promise<HttpResponse<R>> {
    const url = buildUrl(baseUrl, path, options);
    const init = buildRequestConfig(options);

    return executeRequest<R>(url, init);
  },
});
