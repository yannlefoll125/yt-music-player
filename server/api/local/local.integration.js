'use strict';

/* globals describe, expect, it, beforeEach, afterEach */

var app = require('../..');
import request from 'supertest';

var newLocal;

describe('Local API:', function() {
  describe('GET /api/locals', function() {
    var locals;

    beforeEach(function(done) {
      request(app)
        .get('/api/locals')
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if(err) {
            return done(err);
          }
          locals = res.body;
          done();
        });
    });

    it('should respond with JSON array', function() {
      locals.should.be.instanceOf(Array);
    });
  });

  describe('POST /api/locals', function() {
    beforeEach(function(done) {
      request(app)
        .post('/api/locals')
        .send({
          name: 'New Local',
          info: 'This is the brand new local!!!'
        })
        .expect(201)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if(err) {
            return done(err);
          }
          newLocal = res.body;
          done();
        });
    });

    it('should respond with the newly created local', function() {
      newLocal.name.should.equal('New Local');
      newLocal.info.should.equal('This is the brand new local!!!');
    });
  });

  describe('GET /api/locals/:id', function() {
    var local;

    beforeEach(function(done) {
      request(app)
        .get(`/api/locals/${newLocal._id}`)
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if(err) {
            return done(err);
          }
          local = res.body;
          done();
        });
    });

    afterEach(function() {
      local = {};
    });

    it('should respond with the requested local', function() {
      local.name.should.equal('New Local');
      local.info.should.equal('This is the brand new local!!!');
    });
  });

  describe('PUT /api/locals/:id', function() {
    var updatedLocal;

    beforeEach(function(done) {
      request(app)
        .put(`/api/locals/${newLocal._id}`)
        .send({
          name: 'Updated Local',
          info: 'This is the updated local!!!'
        })
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if(err) {
            return done(err);
          }
          updatedLocal = res.body;
          done();
        });
    });

    afterEach(function() {
      updatedLocal = {};
    });

    it('should respond with the updated local', function() {
      updatedLocal.name.should.equal('Updated Local');
      updatedLocal.info.should.equal('This is the updated local!!!');
    });

    it('should respond with the updated local on a subsequent GET', function(done) {
      request(app)
        .get(`/api/locals/${newLocal._id}`)
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if(err) {
            return done(err);
          }
          let local = res.body;

          local.name.should.equal('Updated Local');
          local.info.should.equal('This is the updated local!!!');

          done();
        });
    });
  });

  describe('PATCH /api/locals/:id', function() {
    var patchedLocal;

    beforeEach(function(done) {
      request(app)
        .patch(`/api/locals/${newLocal._id}`)
        .send([
          { op: 'replace', path: '/name', value: 'Patched Local' },
          { op: 'replace', path: '/info', value: 'This is the patched local!!!' }
        ])
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if(err) {
            return done(err);
          }
          patchedLocal = res.body;
          done();
        });
    });

    afterEach(function() {
      patchedLocal = {};
    });

    it('should respond with the patched local', function() {
      patchedLocal.name.should.equal('Patched Local');
      patchedLocal.info.should.equal('This is the patched local!!!');
    });
  });

  describe('DELETE /api/locals/:id', function() {
    it('should respond with 204 on successful removal', function(done) {
      request(app)
        .delete(`/api/locals/${newLocal._id}`)
        .expect(204)
        .end(err => {
          if(err) {
            return done(err);
          }
          done();
        });
    });

    it('should respond with 404 when local does not exist', function(done) {
      request(app)
        .delete(`/api/locals/${newLocal._id}`)
        .expect(404)
        .end(err => {
          if(err) {
            return done(err);
          }
          done();
        });
    });
  });
});
