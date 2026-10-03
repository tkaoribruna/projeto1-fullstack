//postsService.js

import api from './api'

export async function buscarPosts(){
    const respApi = await api.get('/posts');

    return respApi.data.posts;

}

export async function criarPost(title, body, userId){

    const respApi = await api.post('/posts/add',{
        title: title,
        body: body,
        userId: userId
    });

    return respApi.data;
}