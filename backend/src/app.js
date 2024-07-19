import express from 'express';
import { routes } from './routes/index.js';
import { conectToDataBase } from './config/dbConnect.js'

const connection = await conectToDataBase();

connection.on('error',(erro) => {
  console.log("Erro com a conexão com o banco de dados!")
})

connection.once('open',() =>{
  console.log("Conexão feita com sucesso!");
})

const app = express();

app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Credentials', true)
  res.setHeader('Access-Control-Allow-Origin', '*')
  
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT')
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  )
  next();
});

routes(app);

export { app };