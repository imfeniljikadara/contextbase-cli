import { api } from '../api';
import { setToken } from '../config';

export async function signup(email: string, password: string) {
  const res = await api.post('/api/auth/signup', { email, password });
  setToken(res.data.token);
  console.log("🎉 Signup successful! Token stored.");
}
