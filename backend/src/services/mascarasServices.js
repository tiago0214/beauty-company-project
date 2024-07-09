import mascaras from '../models/mascaras.js'

class MascarasServices {

  static async listAllMascaras (){
    try {
      const mascara = await mascaras.find({});

      return mascara;
    } catch (error) {
      throw new Error('Não foi possivel procurar no banco de dados');
    }
  }

  static async createNewMasc (dto){

    try {
      console.log(dto);
      const newMascara = await mascaras.create(dto);

      return newMascara;
    } catch (error) {
      throw new Error('Não foi possivel cadastrar a mascara.');
    }
    
  }
}

export default MascarasServices;