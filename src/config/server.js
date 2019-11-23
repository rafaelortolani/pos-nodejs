console.log('src/config/server.js')

import Hapi from '@hapi/hapi';
import { Sequelize, Model, DataTypes } from 'sequelize';
import { CREATED, OK } from 'http-status';

const sequelize = new Sequelize('sqlite:blog.sqlite');

const init = async () => {
    const server = Hapi.server({
        port: 3000,
        host: 'localhost'
    });

  await server.register([
        {
            plugin: require('hapi-sequelizejs'),
            options:[
                {
                    name: 'fitafit',
                    models:[
                        'src/api/**/**.models.js'
                    ],
                    sequelize,
                    sync: true
                }
            ]
        },
        {
            plugin: require('hapi-router'),
            options:{
                routes: 'src/api/**/**.routes.js'
        }
    }]);

   
    try {
        await sequelize.sync({ force: true });
       // Post.bulkCreate([
       //     {title: 'a', content: 'b'},
       //     {title: 'a', content: 'c'}
       // ]);
    } catch (e) {
        throw new Error(e);
    }

    await server.start();
    console.log('Server running on %s', server.info.uri);
};

process.on('unhandledRejection', (err) => {
    console.error(err);
    process.exit(1);
});

init();