import {list, create, detail, update, destroy} from './tags.controller.js';
import * as Schemas from './tags.schemas';

export default [
    {
        method:'GET',
        path:'/posts/{postId}/tags',
        handler: list,
        config:{
            validate:{
                params:Schemas.params
            }
        }
    },
    {
        method:'GET',
        path:'/posts/{postId}/tags/{id}',
        handler: detail,
        config:{
            validate:{
                params:Schemas.params
            }
        }
    },
    {
        method:'POST',
        path:'/posts/{postId}/tags',
        handler:create,
        config:{
            validate:{
                params:Schemas.params,
                payload:Schemas.payload
            }
        }
    },
    {
        method:'PUT',
        path:'/posts/{postId}/tags/{id}',
        handler: update,
        config:{
            validate:{
                params:Schemas.params,
                payload:Schemas.update
            }
        }
    },
    {
        method:'DELETE',
        path:'/posts/{postId}/tags/{id}',
        handler: destroy,
        config:{
            validate:{
                params:Schemas.params
            }
        }
    }
];