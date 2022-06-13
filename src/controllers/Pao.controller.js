import PaesService from '../services/Pao.service.js';

const paesService = new PaesService();

class PaesController {
  async getAllPaes(req, res) {
    try {
      const paes = await paesService.getAllPaes();
      res.send(paes);
    } catch (err) {
      console.log(err);
    }
  }
  async getPaesById(req, res) {
    const idParam = req.params.id;
    try {
      const chosenPao = await paesService.getPaesById(idParam);
      res.send(chosenPao);
    } catch (err) {
      console.log(err);
    }
  }
  async createPao(req, res) {
    const { nome, preco, descricao, foto } = req.body;
    try {
      const newPao = await paesService.createPao(nome, preco, descricao, foto);
      res.status(201).send(newPao);
    } catch (err) {
      console.log(err);
    }
  }

  async updatePao(req, res) {
    const { nome, preco, descricao, foto } = req.body;
    const id = req.params.id;
    const updatedPao = await paesService.updatePaes(
      id,
      nome,
      preco,
      descricao,
      foto,
    );
    res.send(updatedPao);
  }

  async deletePao(req, res) {
    const idParam = req.params.id;
    await paesService.deletePao(idParam);
    res.sendStatus(204);
  }
}

export default PaesController;
