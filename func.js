const fdk=require('@fnproject/fdk');
const objectStore = require( './saveObject.js' );
var logger = require( './logger' );

fdk.handle(function(){
  logger.log('info',`objectstorage-upload-func-node for ${JSON.stringify()}`)
  let objectName = 'myData.json';
  objectStore.runShippingReportingJob(objectName, { content: "Nama Saya is M. Syifaul Ikrom Almasyriqi", moreContent: "dari kelas TI-3G", value: 20 })
})


// invoke with :
// echo -n '{"objectName":"dataNow.json","payload":{"you":"lovely person"}}' | fn invoke soaring shippings-reporter-func
// yes | cp -rf /vagrant/shippings-reporter-func/*  .