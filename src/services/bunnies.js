import { checkError, client } from './client';

export async function fetchBunnies() {
  const resp = await client.from('fuzzy_bunnies').select('*');
  return checkError(resp);
}