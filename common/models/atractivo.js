'use strict';
module.exports = function(Atractivo) {
  Atractivo.uploadImage = function(id, req, res, cb) {
    Atractivo.findById(id, function(err, instance) {
      // if (err) return cb(err);
      // if (!instance) return cb(new Error(`No se encontró ningún atractivo con ID ${id}`));

      // const container = 'multimedia';
      // // const filex = img_principal;
      // const fileName = `${instance.id}-'mias'`;
      // // console.log(img_principal);
      // Atractivo.app.models.container.upload(req, fileName, { container: 'multimedia'}, function(err, fileObject) {
      //   if (err) return cb(err);
      //   instance.updateAttributes({
      //     img_principal: fileObject.url
      //   }, function(err, instance) {
      //     if (err) return cb(err);
      //     cb(null, instance);
      //   });
      // });
      var storage = require('loopback-component-storage');
      var storageService = storage.StorageService({provider:'filesystem', root:'./server/storage'});
      storageService.upload(req, res, {container: 'multimedia'}, function(err, fileObject) {
          if (err) {
              cb(err);
          }
          else {
            console.log(fileObject.files.file[0]);
            instance.updateAttributes({
              img_principal: `/api/containers/multimedia/download/${fileObject.files.file[0].name}`
            }, function(err, instance) {
              if (err) return cb(err);
              cb(null, fileObject.files.file[0]);
            });
          }
      });
    });
  };
  Atractivo.remoteMethod(
    'uploadImage',
    {
      description: 'Sube una imagen para el Atractivo',
      accepts: [
          {arg: 'id', type: 'string'},
          {arg: 'req', type: 'object', 'http': {source: 'req'}},
          {arg: 'res', type: 'object', 'http': {source: 'res'}}
      ],
      returns: {arg: 'image', type: 'object'},
      http: {verb: 'post', path: '/:id/image'}
    }
  );
};
