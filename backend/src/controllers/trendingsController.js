import TrendingsServices from '../services/trendingsServices.js'

class TrendingsController {

  static async listAllTrendings ( req, res ){
    try {
      const trending = await TrendingsServices.listAllTrendings();

      res.status(200).send(trending);
    } catch (error) {
      res.status(400).send({ message: error.message })
    }
  }

  static async createNewTrend ( req, res){
    try {
      const trending = req.body;

      const newTrend = await TrendingsServices.createNewTrends(trending);

      res.status(201).send({message: 'trend cadastrada com sucesso!',item: newTrend})
    } catch (error) {
      res.status(400).send({message: error.message})
    }
  }
}

export default TrendingsController;