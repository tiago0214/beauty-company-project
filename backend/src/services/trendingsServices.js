import trendings from "../models/trendings.js";

class TrendingsServices {
  static async listAllTrendings(){
    try {
      const trending = await trendings.find({});

      return trending;
    } catch (error) {
      throw new Error('Não foi possivel procurar no banco de dados')
    }
  }

  static async createNewTrends(dto){
    try {
      const newTrending = await trendings.create(dto);

      return newTrending;
    } catch (error) {
      throw new Error('Não foi possivel cadastrar a mascara.');
    }
  }
}

export default TrendingsServices