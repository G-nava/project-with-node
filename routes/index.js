import charactersRouter from './characters.routes';

function routerAPI(app){
  app.use('/character',charactersRouter);// define el end point
}

module.exports = routerAPI;
