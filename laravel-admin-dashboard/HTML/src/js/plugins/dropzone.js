(function(){
  'use strict';

  Dropzone.autoDiscover = false

  function mockFile(file, dzInstance, error) {
    var name_pieces = file.split(/[\s\/]+/)
    var name = name_pieces[name_pieces.length-1]
    
    // Create the mock file:
    var mockFile = {
      name: name,
      size: 12345,
      accepted: true,
      dataURL: file
    }

    // Call the default addedfile event handler
    dzInstance.emit('addedfile', mockFile);

    // And optionally show the thumbnail of the file:
    // dzInstance.emit('thumbnail', mockFile, file);

    // Or if the file on your server is not yet in the right
    // size, you can let Dropzone download and resize it
    dzInstance.createThumbnailFromUrl(
      mockFile,
      dzInstance.options.thumbnailWidth, 
      dzInstance.options.thumbnailHeight,
      dzInstance.options.thumbnailMethod, 
      true, 
      function(thumbnail) {
        dzInstance.emit('thumbnail', mockFile, thumbnail);
      }
    );

    // fake error / success
    mockFile.status = Dropzone[(error ? 'ERROR' : 'SUCCESS')];
    dzInstance.emit((error ? 'error' : 'success'), mockFile, (error ? 'The error message' : 'success'), null);

    // Make sure that there is no progress bar, etc...
    dzInstance.emit('complete', mockFile);

    // If you use the maxFiles option, make sure you adjust it to the
    // correct amount:
    // var existingFileCount = 1; // The number of files already uploaded
    // dzInstance.options.maxFiles = dzInstance.options.maxFiles - existingFileCount;
  }

  $('[data-toggle="dropzone"]').each(function() {
    var element = $(this)
    var template = element.find('.dz-preview')

    var isMultiple = void 0 !== element.data('dropzone-multiple')
    var currentFile = void 0
    var options  = {
      url: element.data("dropzone-url"),
      thumbnailWidth: null,
      thumbnailHeight: null,
      previewsContainer: template.get(0),
      previewTemplate: template.html(),
      maxFiles: isMultiple ? null : 1,
      acceptedFiles: 'image/*',
      clickable: void 0 !== element.data('dropzone-clickable')
        ? element.data('dropzone-clickable') : true,
      init: function() {
        this.on('addedfile', function(file) {
          if (!isMultiple && currentFile) {
            this.removeFile(currentFile)
          }
          currentFile = file
        })

        this.on('maxfilesexceeded', function(file) {
          this.removeAllFiles()
          this.addFile(file)
        })

        var filesOnServer = element.data('dropzone-files')
        var dzInstance = this
        filesOnServer.forEach(function(file, index) {
          mockFile(file, dzInstance, index >= (filesOnServer.length - 1) / 2)
        })
      }
    }

    template.html('')
    element.dropzone(options)
  })

})()