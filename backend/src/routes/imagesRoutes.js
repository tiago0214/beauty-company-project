import express from "express";
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url); // get the resolved path to the file
const __dirname = path.dirname(__filename); // get the name of the directory

const pathMascaras = `${__dirname}/assets/img-sell/`
const pathTrendings = `${__dirname}/assets/trendings/`

const route = express.Router();

route.use('/imgMascaras', express.static(pathMascaras))
route.use('/imgTrendings', express.static(pathTrendings))

export default route;