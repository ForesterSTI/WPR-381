const { promises } = require('dns');
const http = require('http');
const fs = require('fs').promises;
const host = "localhost"
const port = 8080


const requestListner = function listern(req,res){
  /*_dirname = module wrapper object that computes the path to a resource that we want to use 
  it to create a path to the index.html*/
 le