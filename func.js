const fdk=require('@fnproject/fdk');
const objectStore = require( './saveObject.js' );
var logger = require( './logger' );

fdk.handle(function(input){
  let name = 'ObjectStorage';
  if (input.name) {
    name = input.name;
  }
  console.log('\nInside Node Hello World function')
  return {'message': 'Berhasil upload file ke ' + name}
})


// invoke with :
// echo -n '{"objectName":"dataNow.json","payload":{"you":"lovely person"}}' | fn invoke soaring shippings-reporter-func
// yes | cp -rf /vagrant/shippings-reporter-func/*  .