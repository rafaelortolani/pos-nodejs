import {list} from './posts.controllers'

export default [
    {
        method:'GET',
        path:'/posts',
        handler: list
    }
];
    // server.route({
    //     method: 'POST',
    //     path: '/posts',
    //     handler: async (request, h) => {
    //         const { payload } = request;
    //         const post = await Post.create(payload);

    //         return h.response(post).code(CREATED);
    //     }
    // });

    // server.route({
    //     method: 'PUT',
    //     path: '/posts/{id}',
    //     handler: async (request, h) => {
    //         const { params: { id }, payload } = request;
    //         const post = await Post.update(payload, { where: { id }});

    //         return h.response(post).code(OK);
    //     }
    // });

    // server.route({
    //     method: 'GET',
    //     path: '/posts',
    //     handler: async (request, h) => {
    //         return await Post.findAll();
    //     }
    // });