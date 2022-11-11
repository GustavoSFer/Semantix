const { expect } = require('chai');
const Sinon = require('sinon');
const controller = require('../../Controller');
const service = require('../../Service');
const { dataDb, bodycreate } = require('../Mock');

describe('Controller', () => {
  const response = {};
  const request = {};
  before(function () {
    request.body = { };
    response.status = Sinon.stub().returns(response);
    response.json = Sinon.stub().returns();
  });

  describe('#GetAll', () => {
    it('Quando existir dados - Deve retornar o status 200', async () => {
      Sinon.stub(service, 'getAll').resolves(dataDb);
      await controller.getAll(request, response);
      expect(response.status.calledWith(200)).to.be.equal(true);
      Sinon.restore();
    });
    it('Quando nao tiver dados - Deve retornar um array vazio', async () => {
      Sinon.stub(service, 'getAll').resolves([]);
      await controller.getAll(request, response);
      expect(response.json.calledWith([])).to.be.equal(true);
    });  
  });

  describe("#Login", () => {
    before(() => {
      request.body = { bodycreate };
      response.status = Sinon.stub().returns(response);
      response.json = Sinon.stub().returns();
    });
    after(() => {
      Sinon.restore();
    });
    // it('Verificando se é retornado o usuário ao tentar fazer login', async () => {
    //   Sinon.stub(service, 'login').resolves(dataDb[0]);
    //   await controller.login(request, response);
    //   expect(response.status.calledWith(201)).to.be.equal(true);
    // });
  });
});