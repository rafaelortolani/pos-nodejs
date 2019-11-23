import {list, create, detail, update, destroy} from './tags.controller.js';
import * as Schemas from './tags.schemas';

export default [
    {
        method:'GET',
        path:'/posts/{postid}/tags',
        handler: list
    },
    {
        method:'GET',
        path:'/posts/{postid}/tags/{id}',
        handler: detail,
        config:{
            validate:{
                params:Schemas.params
            }
        }
    },
    {
        method:'POST',
        path:'/posts/{postid}/tags',
        handler:create,
        config:{
            validate:{
                payload:Schemas.payload
            }
        }
    },
    {
        method:'PUT',
        path:'/posts/{postid}/tags/{id}',
        handler: update,
        config:{
            validate:{
                payload:Schemas.update
            }
        }
    },
    {
        method:'DELETE',
        path:'/posts/{postid}/tags/{id}',
        handler: destroy,
        config:{
            validate:{
                params:Schemas.params
            }
        }
    }
];