interface ActionResult {
  ok: boolean;
  error_message?: string;
  message?: string;
}

interface LoginResult {
  token: string;
}

interface PhotoResult {
  url: string;
}
