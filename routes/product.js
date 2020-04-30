//task given on 16th apr

var express = require('express');
var router = express.Router();

router.get('/product',function(req,res){
    res.send('Product')
  }) 
  
  router.post('/product',function(req,res){
    res.send('Got a POST request at /product')
  })  
  
  router.put('/product',function(req,res){
    res.send('Got a PUT request at /product')
  })  
  
  router.delete('/product',function(req,res){
    res.send('Got a DELETE request at /product');
  })  
  
  module.exports=router;
  
  
  
  
  
  module.exports = router;