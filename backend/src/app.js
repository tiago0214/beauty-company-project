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
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

routes(app);

export { app };