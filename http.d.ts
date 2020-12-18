interface HttpResponse<T> {
  ok: boolean;
  error_message?: string;
  data?: T;
}
