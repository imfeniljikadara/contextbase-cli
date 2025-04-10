import { api } from '../api';

export async function setMemory(key: string, value: string, opts: any) {
  const ttl = parseInt(opts.ttl);
  await api.post('/api/memory', { key, value, ttl });
  console.log(`Set "${key}" = "${value}" (TTL: ${ttl}s)`);
}
