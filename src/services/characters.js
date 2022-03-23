import { checkError, client } from './client';

export async function fetchCharacters() {
  const resp = await client.from('characters').select('*');
  return checkError(resp);
}
export async function filterCharacters(speciesType) {
  const resp = await client.from('characters').select('*').eq('species', speciesType);
  return checkError(resp);
}