/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /api/locals              ->  index
 * POST    /api/locals              ->  create
 * GET     /api/locals/:id          ->  show
 * PUT     /api/locals/:id          ->  upsert
 * PATCH   /api/locals/:id          ->  patch
 * DELETE  /api/locals/:id          ->  destroy
 */

'use strict';

import jsonpatch from 'fast-json-patch';
import Local from './local.model';

const fs = require('fs');
const path = require('path');

function respondWithResult(res, statusCode) {
  statusCode = statusCode || 200;
  return function(entity) {
    console.log('local api, resond with result');
    console.log(entity);
    if(entity) {
      return res.status(statusCode).json(entity);
    }
    return null;
  };
}

function patchUpdates(patches) {
  return function(entity) {
    try {
      jsonpatch.apply(entity, patches, /*validate*/ true);
    } catch(err) {
      return Promise.reject(err);
    }

    return entity.save();
  };
}

function removeEntity(res) {
  return function(entity) {
    if(entity) {
      return entity.remove()
        .then(() => {
          res.status(204).end();
        });
    }
  };
}

function handleEntityNotFound(res) {
  return function(entity) {
    if(!entity) {
      res.status(404).end();
      return null;
    }
    return entity;
  };
}

function handleError(res, statusCode) {
  statusCode = statusCode || 500;
  return function(err) {
    res.status(statusCode).send(err);
  };
}


function respondWithFileList(res, fileList) {

}

// Gets a list of Locals
export function index(req, res) {

  console.log(res.data);

  var fileDirPath = path.join(__dirname, '../../files');

  console.log('Local files folder path: ' + fileDirPath);

  var fileList = [];

  fs.readdir(fileDirPath, function(err, files) {
    if(err) {
      console.error('Local index: error while reading dir: ' + fileDirPath);
      console.error(err);
      
      res.status(404).end();

    } else {
      console.log(fileDirPath + ' contains: ' + files);

      res.status(200).json(files);
    }
  });


}

// Gets a single Local from the DB
export function show(req, res) {
  /*return Local.findById(req.params.id).exec()
    .then(handleEntityNotFound(res))          //Then calls the function passed as arg with the query returned doc as param
    .then(respondWithResult(res))
    .catch(handleError(res));*/
}

// Creates a new Local in the DB
export function create(req, res) {
  return Local.create(req.body)
    .then(respondWithResult(res, 201))
    .catch(handleError(res));
}

// Upserts the given Local in the DB at the specified ID
export function upsert(req, res) {
  if(req.body._id) {
    delete req.body._id;
  }
  return Local.findOneAndUpdate({_id: req.params.id}, req.body, {new: true, upsert: true, setDefaultsOnInsert: true, runValidators: true}).exec()

    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Updates an existing Local in the DB
export function patch(req, res) {
  if(req.body._id) {
    delete req.body._id;
  }
  return Local.findById(req.params.id).exec()
    .then(handleEntityNotFound(res))
    .then(patchUpdates(req.body))
    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Deletes a Local from the DB
export function destroy(req, res) {
  return Local.findById(req.params.id).exec()
    .then(handleEntityNotFound(res))
    .then(removeEntity(res))
    .catch(handleError(res));
}
