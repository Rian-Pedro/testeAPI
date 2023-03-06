const multer = require('multer')

module.exports = (multer({
  storage: multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, './img')
    },
    filename: (req, file, cb) => {
      cb(null, Date.now().toString() + "_" + file.originalname)
    }
  }),
  fileFilter: (req, file, cb) => {
    const extencaoImg = ['image/png', 'image/jpg', 'image/jpeg'].find(formtoAceito => formtoAceito == file.mimetype)

    if(extencaoImg) {
      return cb(null, true);
    }

    return cb(null, false)
  }
}));