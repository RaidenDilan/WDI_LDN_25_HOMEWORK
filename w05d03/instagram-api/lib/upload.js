const s3 = require('./s3');
const multer = require('multer');
const multerS3 = require('multer-s3');
const uuid = require('uuid');

module.exports = multer({
  storage: multerS3({
    s3, // OR // s3: s3;
    bucket: 'wdi-ldn',
    key(req, file, next) { // key is a file in the amazon universe.
      const ext = file.mimetype.replace('image/', '');
      const filename = `${uuid.v4()}.${ext}`;
      next(null, filename);
    },
    contentType: multerS3.AUTO_CONTENT_TYPE
  }),
  // filtering what image format can be uploaded.
  fileFilter(req, file, next) {
    const whitelist = ['image/png', 'image/jpeg', 'image/gif'];
    next(null, whitelist.includes(file.mimetype));
  },
  limits: {
    fileSize: 1024 * 1024 * 2
  }
});

// module.exports = multer({
//   dest: 'public/uploads/',
//   fileFilter(req, file, next) {
//     const whitelist = ['image/png', 'image/jpeg', 'image/gif'];
//     next(null, whitelist.includes(file.mimetype));
//   },
//   limits: {
//     fileSize: 1024 * 1024 * 2
//   }
// });
