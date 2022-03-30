import { api } from './index.js';



// get all post haves
export async function GetAllPostHaves() {
    return await api('have/', null, 'GET');
}

// get post have by id
export async function GetPostHaveById(id) {
    return await api('have/' + id, null, 'GET');
}

// create a post have
export async function CreatePostHave(post_id, user_id) {
    let post_have = {
        post_id: post_id,
        user_id: user_id
    };
    return await api('have/', post_have, 'POST');
}

