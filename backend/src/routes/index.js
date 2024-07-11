import express from 'express';
import mascarasRoutes from './mascarasProducts.js';
import trendingsRoutes from './trendingsProducts.js'

import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url); // get the resolved path to the file
const __dirname = path.dirname(__filename); // get the name of the directory
const pathFile = `${__dirname}/public`

console.log(pathFile)

export function routes (app){
  app.use('/', express.static(pathFile))

  app.use(express.json(),mascarasRoutes,trendingsRoutes);
}