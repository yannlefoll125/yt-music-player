'use strict';

/* globals sinon, describe, expect, it */

var proxyquire = require('proxyquire').noPreserveCache();

var localCtrlStub = {
  index: 'localCtrl.index',
  show: 'localCtrl.show',
  create: 'localCtrl.create',
  upsert: 'localCtrl.upsert',
  patch: 'localCtrl.patch',
  destroy: 'localCtrl.destroy'
};

var routerStub = {
  get: sinon.spy(),
  put: sinon.spy(),
  patch: sinon.spy(),
  post: sinon.spy(),
  delete: sinon.spy()
};

// require the index with our stubbed out modules
var localIndex = proxyquire('./index.js', {
  express: {
    Router() {
      return routerStub;
    }
  },
  './local.controller': localCtrlStub
});

describe('Local API Router:', function() {
  it('should return an express router instance', function() {
    localIndex.should.equal(routerStub);
  });

  describe('GET /api/locals', function() {
    it('should route to local.controller.index', function() {
      routerStub.get
        .withArgs('/', 'localCtrl.index')
        .should.have.been.calledOnce;
    });
  });

  describe('GET /api/locals/:id', function() {
    it('should route to local.controller.show', function() {
      routerStub.get
        .withArgs('/:id', 'localCtrl.show')
        .should.have.been.calledOnce;
    });
  });

  describe('POST /api/locals', function() {
    it('should route to local.controller.create', function() {
      routerStub.post
        .withArgs('/', 'localCtrl.create')
        .should.have.been.calledOnce;
    });
  });

  describe('PUT /api/locals/:id', function() {
    it('should route to local.controller.upsert', function() {
      routerStub.put
        .withArgs('/:id', 'localCtrl.upsert')
        .should.have.been.calledOnce;
    });
  });

  describe('PATCH /api/locals/:id', function() {
    it('should route to local.controller.patch', function() {
      routerStub.patch
        .withArgs('/:id', 'localCtrl.patch')
        .should.have.been.calledOnce;
    });
  });

  describe('DELETE /api/locals/:id', function() {
    it('should route to local.controller.destroy', function() {
      routerStub.delete
        .withArgs('/:id', 'localCtrl.destroy')
        .should.have.been.calledOnce;
    });
  });
});
