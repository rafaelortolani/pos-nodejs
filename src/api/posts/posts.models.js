import {Model} from 'sequelize'

export default (sequelize, dataType) => {
    class Post extends Model {}

    Post.init({
        title: DataTypes.STRING,
        content: DataTypes.TEXT
    }, {sequelize, modelName: 'post'});
    
    return Post;
};