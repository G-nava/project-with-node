import charactersRouter from './characters.routes.mjs';

function routerAPI(app){
  app.use('/character',charactersRouter);// define el end point
}
export default routerAPI;
