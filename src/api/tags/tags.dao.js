import {instances} from 'hapi-sequelizejs'

const Tag = instances.getModel('Tag');

export default class TagsDAO{
    findAll(){
        return Tag.findAll();
    }

    create(data){
        return Tag.create(data);
    }

    findById(id){
        return Tag.findByPk(id);
    }

    async update(id, tag){
        await Tag.update(tag, {where :{id}})
        return await this.findById(id);
    }

    destroy(id){
        return Tag.destroy({where :{id}});
    }
}