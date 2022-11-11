const sinon = require('sinon');
const { expect } = require('chai');
const model = require('../../ConnectionMongo');
const { bodycreate, dataDb } = require('../Mock');
const modelfind = require('../../Model');

describe('Model', () => {
  beforeEach(() => sinon.restore());
  describe('FindAll', () => {
    it('Quando tiver dados, deve retornar um array com as informações', async () => {
      sinon.stub(model, 'find').resolves(dataDb);
      const data = await modelfind.getAll();
      expect(data).to.be.equal(dataDb);
    });
    it('Quando não tiver dados, deve retornar um array vazio', async () => {
      sinon.stub(model, 'find').resolves([]);
      const data = await modelfind.getAll();
      expect(data).to.be.empty;
    });
  });

  describe('Login', () => {
    it('Realizando login com usuário', async () => {
      sinon.stub(model, 'findOne').resolves(dataDb[0]);
      const data = await modelfind.login('gustavo@gmail.com');
      expect(data).to.be.equal(dataDb[0]);
    });
    it('usuario não existente retorna "null"', async () => {
      sinon.stub(model, 'findOne').resolves(null);
      const data = await modelfind.login('pedro@gmail.com');
      expect(data).to.be.equal(null);
    });
  });
});
