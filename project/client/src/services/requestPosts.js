import { api } from './index.js';

// get all post requests
export async function GetAllPostRequests() {
    return await api('posts/request/', null, 'GET');
}
//get posts requests made by user_id
export async function GetRequestPostsByUserID(user_id) {
    return await api('posts/request/user/' + user_id, null, 'GET');
}

// get post request by id
export async function GetPostRequestById(id) {
    return await api('posts/request/' + id, null, 'GET');
}
// create a post reuest
export function CreatePostRequest(user_id, message, image, animalTypes) {
    let post_request = {
        user_id: user_id,
        message: message,
        image: image,
        active: 1,
        orgInterested: '',
        animalTypes: animalTypes
    };
    return api('posts/request/newpost', post_request, 'POST');
}





