const { expect } = require('chai');
const Sinon = require('sinon');
const controller = require('../../Controller');
const service = require('../../Service');
const { dataDb } = require('../Mock');

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
  });
});