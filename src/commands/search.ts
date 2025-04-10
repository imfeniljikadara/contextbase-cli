import { api } from '../api';

export async function searchMemory(query: string) {
  const res = await api.get(`/api/memory/search/${query}`);
  const results = res.data.results;
  if (!results.length) return console.log("🔍 No matches found.");
  console.log("🔍 Search results:");
  results.forEach((k: string) => console.log(` - ${k}`));
}
