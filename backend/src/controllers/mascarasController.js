import MascarasServices from '../services/mascarasServices.js';

class MascarasController {
  static async listAllMascaras( req, res ){
    try {
      const mascara = await MascarasServices.listAllMascaras();

      res.status(200).send(mascara);
    } catch (error) {
      res.status(400).send({ message: error.message })
    }
    
  }

  static async createNewMasc( req, res){
    try {
      const mascara = req.body;

      const newMascara = await MascarasServices.createNewMasc(mascara);

      res.status(201).send({message: 'mascara cadastrada com sucesso!',item: newMascara});
    } catch (error) {
      res.status(400).send({ message: error.message });
    }
  }
}

export default MascarasController;