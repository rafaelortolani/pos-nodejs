import {Model} from 'sequelize'

export default (sequelize, dataType) => {
    class Tag extends Model {}

    Tag.init({
        name: dataType.STRING,
        postId: dataType.INTEGER
    }, {sequelize, modelName: 'Tag'});
    
    return Tag;
};