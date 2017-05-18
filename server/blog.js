/**
 * Created by CharlieShi on 5/18/17.
 */

'use strict'
const http = require('http');
const Clay = require('clay-client');

module.exports = require('express').Router()
	.get('/', (req, res, next) => {
    Clay.run('nicoslepicos/medium-get-users-posts', {"username":"qcharlieshi"})
    .then((result) => {
      console.log(Object.keys(result.payload.references.Post));

      res.send(result.payload.references.Post['716accbc9000']);
    })
  })