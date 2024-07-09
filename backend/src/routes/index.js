import express from 'express';
import mascarasRoutes from './mascarasProducts.js';
import trendingsRoutes from './trendingsProducts.js'

export function routes (app){
  app.get(('/'), (req, res) => {
    return res.status(200).send("Welcome: this is a back-end server for a project on boticário.")
  });

  app.use(express.json(),mascarasRoutes,trendingsRoutes);
}