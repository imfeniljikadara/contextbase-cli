import { api } from '../api';

export async function listMemory() {
  const res = await api.get(`/api/memory`);
  const keys = res.data.keys;
  if (!keys.length) return console.log("🧠 No memory keys found.");
  console.log("📦 Keys:");
  keys.forEach((k: string) => console.log(` - ${k}`));
}
