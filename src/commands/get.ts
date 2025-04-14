import { api } from '../api';

export async function getMemory(key: string, opts: any) {
  const res = await api.get(`/api/memory/${key}`);
  const value = res.data.value;

  if (opts.json) {
    console.log(JSON.stringify({ key, value }, null, 2));
  } else {
    console.log(`${key} = ${value}`);
  }
}