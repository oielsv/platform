export interface HttpOptions {
  params?: Record<string, string>;
  signal?: AbortSignal;
  next?: NextFetchRequestConfig | undefined;
  headers?: HeadersInit;
  cache?: RequestCache;
}

export interface HttpResponse<T = never> {
  status: number;
  data: ApiResponse<T>;
}

export interface ApiOptions extends HttpOptions {
  signal?: AbortSignal;
}

export interface ApiError {
  code: number;
  message: string;
  description: string;
}

export interface ApiResponse<T = unknown> {
  body: T;
  error: ApiError;
}
