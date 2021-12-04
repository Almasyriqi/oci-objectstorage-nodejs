const fdk=require('@fnproject/fdk');
const objectStore = require( './saveObject.js' );

fdk.handle(function(input){
  objectStore;
  let name = 'ObjectStorage';
  if (input.name) {
    name = input.name;
  }
  console.log('\nInside Node Hello World function')
  return {'message': 'Berhasil upload file ke ' + name}
})