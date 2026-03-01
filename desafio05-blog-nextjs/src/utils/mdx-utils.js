import { api } from '../services/api'

export const getPosts = async () => {
    const {data} = await api.get('/post'); 

    if(data){
        return data;
    }

    return []
}

export const getPostBySlug = async (id) => {

    //TODO: BUSCAR UM POST EM ESPECIFICO.
    const {data} = await api.get(`/post?id=eq.${id}`)

    if(data) {
        return data;
    }

    return []
}

export const createPost = async (data) => {

    const object = {
        title: data.titulo,
        description: data.descricao,
        body: data.corpo,
        created_at: new Date(Date.now())
    }

    const response = await api.post('/post', object);
    return response;
}

export const updatePost = async (id, data) => {

    const object = {
        title: data.titulo,
        description: data.descricao,
        body: data.corpo
    }

    const response = await api.patch(`/post?id=eq.${id}`, object);
    return response;
}

export const deletePost = async (id) => {
    const response = await api.delete(`/post?id=eq.${id}`);
    return response;
}