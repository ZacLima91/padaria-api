import Paes from '../models/paes.model.js';

class PaesService {
  async getAllPaes() {
    const paes = await Paes.find();
    if (paes.length === 0) {
      throw {
        status: 404,
        message: 'Não há paes cadastrados',
      };
    }
    return paes;
  }
  async getPaesById(id) {
    const paoChosen = await Paes.findById(id)
    return paoChosen;
  }
  async createPao( nome, preco, descricao, foto ) {
  
    const newPao = {
      nome: nome,
      preco: preco,
      descricao: descricao,
      foto: foto,
    };
    const pao = await Paes.create(newPao); 
    return pao;
  }

  async updatePaes(id,nome, preco, descricao, foto) {
 
    const updatedPao = {
      id,
      nome,
      preco,
      descricao,
      foto,
    };
    const pao = await Paes.findByIdAndUpdate(id, updatedPao);
    
    return pao;
  }

  async deletePao(id) {
    await Paes.findByIdAndDelete(id);
    return;
  }
}

export default PaesService;
