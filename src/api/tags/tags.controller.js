import TagsDAO from './tags.dao';
import {CREATED, NO_CONTENT} from 'http-status'
import { pathToFileURL } from 'url';

const tagsDAO = new TagsDAO();

export async function list(request, h){
    return await tagsDAO.findAll();
}

export async function create (request, h){
    const {payload} = request;
    const tags = await tagsDAO.create(payload);

    return h.response(tags).code(CREATED);
}

export async function detail(request, h){
    const{id} = request.params;
    return tagsDAO.findById(id);
}

export async function update(request, h){
    const{payload, params:{id}} = request;
    return await tagsDAO.update(id, payload);
}

export async function destroy(request, h){
    const{id} = request.params;
    return h.response( await tagsDAO.destroy(id)).code(NO_CONTENT);
}