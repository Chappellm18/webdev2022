import { api } from './index.js';

// get all the locations from the orgs table
export async function GetAllLocations() {
    return await api('locations/', null, 'GET');
}