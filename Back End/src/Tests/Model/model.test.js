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
});
