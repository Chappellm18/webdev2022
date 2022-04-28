import { api } from './index.js';



export async function GetUserById(id) {
    return await api('users/' + id, null, 'GET');
}

// update user password
export async function UpdateUserPassword(id, password) {
    return await api('users/' + id + '/password', password, 'PUT');
}

// delete current user
export async function DeleteUser(id) {
    return await api('users/delete/' + id, null, 'DELETE');
}


//check if user is in an org if yes return the orgid
export async function GetAllOrgs() {
    return await api('users/orgs/', null, 'GET');
}


// get all users
export function GetAllUsers() {
    return api('users/', null, 'GET');
}

// login
export async function Login(username, password) {
    //console.log("username:" + username);
    //console.log("password:" + password);
    let user = {
        username: username,
        password: password
    };
    return await api('users/login', user, 'POST');
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
