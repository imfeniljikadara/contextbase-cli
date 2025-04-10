import { api } from '../api';
import { setToken } from '../config';

export async function login(email: string, password: string) {
  const res = await api.post('/api/auth/login', { email, password });
  setToken(res.data.token);
  console.log("✅ Logged in successfully!");
}