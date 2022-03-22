import { client, checkError } from './client';

export async function fetchWorkshops() {
    const resp = await client.from('workshops').select('*');
    return checkError(resp);
}