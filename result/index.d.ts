interface ActionResult {
  ok: boolean;
  message: string;
}

interface LoginResult {
  email: string;
  error_message?: string;
  token?: string;
}
