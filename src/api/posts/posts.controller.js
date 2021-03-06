import PostsDAO from './posts.dao';
import {CREATED, NO_CONTENT} from 'http-status'
import { pathToFileURL } from 'url';

const postsDAO = new PostsDAO();

export async function list(request, h){
    return await postsDAO.findAll();
}

export async function create (request, h){
    const {payload} = request;
    const post = await postsDAO.create(payload);

    return h.response(post).code(CREATED);
}

export async function detail(request, h){
    const{id} = request.params;
    return postsDAO.findById(id);
}

export async function update(request, h){
    const{payload, params:{id}} = request;
    return await postsDAO.update(id, payload);
}

export async function destroy(request, h){
    const{id} = request.params;
    return h.response( await postsDAO.destroy(id)).code(NO_CONTENT);
}