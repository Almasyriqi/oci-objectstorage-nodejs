const fdk=require('@fnproject/fdk');
const objectStore = require( './saveObject.js' );
var logger = require( './logger' );

fdk.handle(function(){
  console.log('Berhasil upload file');
})


// invoke with :
// echo -n '{"objectName":"dataNow.json","payload":{"you":"lovely person"}}' | fn invoke soaring shippings-reporter-func
// yes | cp -rf /vagrant/shippings-reporter-func/*  .