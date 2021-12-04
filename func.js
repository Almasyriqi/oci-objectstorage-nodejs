const fdk=require('@fnproject/fdk');
const objectStore = require( './saveObject.js' );

fdk.handle(function(input){
  objectStore.runShippingExtractionJob("NewFile.json", { content: "My Name is M. Syifaul Ikrom Almasyriqi", moreContent: "From Class TI-3G", value: 28 })
  let name = 'ObjectStorage';
  if (input.name) {
    name = input.name;
  }
  console.log('\nInside Node Hello World function')
  return {'message': 'Berhasil upload file ke ' + name}
})