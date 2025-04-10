import { clearToken } from '../config';

export function logout() {
  clearToken();
  console.log("Logged out and token cleared.");
}