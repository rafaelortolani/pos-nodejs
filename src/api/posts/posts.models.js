import {Model} from 'sequelize'

export default (sequelize, dataType) => {
    class Post extends Model {}

    Post.init({
        title: dataType.STRING,
        content: dataType.TEXT
    }, {sequelize, modelName: 'Post'});
    
    return Post;
};