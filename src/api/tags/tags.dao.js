import {instances} from 'hapi-sequelizejs'

const Tag = instances.getModel('Tag');

export default class TagsDAO{
    findAll(){
        return Tag.findAll();
    }

    create(data){
        return Tag.create(data);
    }

    findById(postId,id){
        return Tag.findOne({where: {postId, id}});
    }

    async update(postId, id, tag){
        await Tag.update(tag, {where :{id}})
        return await this.findById(postId, id);
    }

    destroy(id){
        return Tag.destroy({where :{id}});
    }
}