
/**Metodo HTTP
 * GET:Buscar informação no back-end
 * POST: Criar uma informação no back-end
 * PUT: alterar uma informação no back-end
 * DELETE: Deletar uma informação no back-end
 */

 /**
  * Ti bpos de Parametros:
  * 
  * Query: Parametros enviado após "?",servem para filtros,paginação  
  * Route: Parametros para identificar recursos
  * request body: Corpo da requisição utilizado para criar ou alterar recurso
  */

 /**
  * SQL: mysql,sqlite,postgreSQL,Oracle,Microsoft Sql Server
    NoSQL:MongoDB, CouchDB, etc
  */ 

  /**
   * Driver: SELECT * FROM users
   * Query Builder: Table("users").select('*').where()
   */
const express = require('express')
const OngController = require('./controllers/OngController')
const incidentController = require('./controllers/incidentController')
const ProfileController = require('./controllers/ProfileController')
const SessionController = require('./controllers/SessionController')

const routes = express.Router();

routes.post('/sessions', SessionController.create);

routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);

routes.get('/profile', ProfileController.index);


routes.get('/incidents', incidentController.index);
routes.post('/incidents', incidentController.create);
routes.delete('/incidents/:id', incidentController.delete);

module.exports = routes;