import { api } from '../api';

export async function listMemory(opts: any) {
  const res = await api.get(`/api/memory`);
  const keys = res.data.keys;

  if (opts.json) {
    console.log(JSON.stringify({ keys }, null, 2));
  } else {
    if (!keys.length) return console.log("No memory keys found.");
    console.log("Keys:");
    keys.forEach((k: string) => console.log(` - ${k}`));
  }
}