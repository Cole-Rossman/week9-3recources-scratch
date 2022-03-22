import { checkError, client } from './client';

export async function fetchCharacters() {
  const resp = await client.from('characters').select('*');
  return checkError(resp);
}