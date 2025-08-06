import { ApiResponse, HttpResponse } from '@/lib/api/models';

export async function executeRequest<R>(url: string, init: RequestInit): Promise<HttpResponse<R>> {
  const res = await fetch(url, init);
  const json = (await res.json()) as ApiResponse<R>;

  const httpResponse: HttpResponse<R> = {
    status: res.status,
    data: json,
  };

  if (!res.ok) {
    throw { url, ...httpResponse, init };
  }

  return httpResponse;
}
