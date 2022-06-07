const express = require("express");
const logger = require("../loggers/logger.js")
const helper = require("../util/helper")
const validator = require("../validator/formetter.js")
//  const router = express.Router();
var _ = require('lodash');

// const express = require('express');

const externalModule = require('./logger')

const router = express.Router();

router.get('/test-me', function (req, res) {
    console.log('The constant in logger route has a value '+externalModule.endpoint)
    console.log('The current batch is '+externalModule.batch)
    externalModule.log()
    res.send('My first ever api!')
});

router.get('/test-me1', function (req, res) {
    res.send('My second ever api!')
});

router.get('/test-me2', function (req, res) {
    res.send('My third api!')
});

router.get('/test-me3', function (req, res) {
    res.send('My 4th api!')
});

router.get('/test-me4', function (req, res) {
    res.send('My last api!')
});

// chunk function
router.get('/chunk', function (req, res) {
    const chunk = (arr, size) =>
    Array.from({ length: Math.ceil(arr.length / size) }, (v, i) =>
        arr.slice(i * size, i * size + size)
    );
    console.log(chunk([1, 2, 3, 4, 5, 5, 7, 8 ,3 ,6 , 7], 5));
    res.send(chunk(['Jan', 'Feb', 3, 4, 5, 5, 7, 8 ,3 ,6 , 7], 5));
});

// chunk function
router.get('/tail', function (req, res) {
    const _ = require('lodash');
    n=20;
    var a =[];
  for(i=n-1;i>=0;i--){
      a.push(1+i*2);
  }

    // let x = [1,3,5,7,9,11,13,15,17,19]
    
    let newArray = _.tail(a);
    
    console.log(newArray);
    res.send(newArray)
});

module.exports = router;
// adding this comment for no reason
