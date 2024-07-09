import express from 'express';
import TrendingsController from '../controllers/trendingsController.js';

const routes = express.Router();

routes.get('/trendings', TrendingsController.listAllTrendings);
routes.post('/trendings', TrendingsController.createNewTrend);

export default routes;