'use strict';

module.exports = function(Hospedaje) {
    Hospedaje.uploadImage = function(id, req, res, cb) {
        Hospedaje.findById(id, function(err, instance) {
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
      Hospedaje.remoteMethod(
        'uploadImage',
        {
          description: 'Sube una imagen para el Hospedaje',
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
