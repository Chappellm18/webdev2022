import { api } from './index.js';

// get all users
export function GetAllUsers() {
    return api('/users');
}

// login
export function Login(username, password) {
    return api('/login', { username, password }, 'POST');
}

// add user
export function AddUser(username, password, email, role, message) {
    return api('/users', { username, password, email, role, message }, 'POST');
}
