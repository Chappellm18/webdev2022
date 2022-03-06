import { api } from './index.js';

// get all users
export function GetAllUsers() {
    return api('users/', null, 'GET');
}

// login
export function Login(username, password) {
    console.log("username:" + username);
    console.log("password:" + password);
    let user = {
        username: username,
        password: password
    };
    return api('users/login', user, 'POST');
}

// add user
export function AddUser(name, username, password, email, role, message) {
    let user = {
        name: name,
        username: username,
        password: password,
        email: email,
        role: role,
        message: message
    };
    return api('users/add', user, 'POST');
}
