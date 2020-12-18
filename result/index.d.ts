interface ActionResult {
  ok: boolean;
  message: string;
}

interface LoginResult {
  ok: boolean;
  error_message?: string;
  token?: string;
}
