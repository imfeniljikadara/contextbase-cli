import { api } from '../api';

export async function getMemory(key: string) {
  const res = await api.get(`/api/memory/${key}`);
  console.log(`${key} =`, res.data.value);
}
