import { api } from './index.js';



// get all post haves
export async function GetAllPostHaves() {
    return await api('posts/have/', null, 'GET');
}
// get posts haves by user_id
export async function GetHavePostsByUserID(user_id) {
    return await api('posts/have/user/' + user_id, null, 'GET');
}
// get post have by id
export async function GetPostHaveById(id) {
    return await api('posts/have/' + id, null, 'GET');
}

// create a post have
export function CreatePostHave(user_id, message, image, animalTypes) {
    let post_have = {
        user_id: user_id,
        message: message,
        image: image,
        active: 1,
        orgInterested: '',
        animalTypes: animalTypes
    };
    return api('posts/have/newpost', post_have, 'POST');
}

