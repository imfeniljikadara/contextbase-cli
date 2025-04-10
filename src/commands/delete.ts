import { api } from '../api';

export async function deleteMemory(key: string) {
  const res = await api.post(`/api/memory/delete`, { key });
  console.log(`Deleted "${key}"`, res.data);
}
