const multer = require("multer");
const path = require("path");
const pathToFileUploads = path.join(__dirname, "../../uploads");

const storage = multer.diskStorage({
  destination: pathToFileUploads,
  filename: (req, file, cb) => {
    const splitedFileName = file.originalname.split(".");
    const fileExtension = splitedFileName[splitedFileName.length - 1];
    cb(
      null,
      Date.now() + "-" + Math.ceil(Math.random() * 1000) + "." + fileExtension
    );
  },
});
const upload = multer({
  storage: storage,
  limits: {
    fileSize: 1000000, // 1 Mb
  },
  fileFilter(req, file, cb) {
    if (!file.originalname.match(/\.(jpg|jpeg|png|gif|svg)$/)) {
      return cb(new Error("Please upload a valid image file"));
    }
    cb(undefined, true); // true is for, carry-on with the file upload
  },
});

// For Multiple Uploads
// exports.categoryUploads = upload.fields([
//   { name: "image1", maxCount: 1 },
//   { name: "image2", maxCount: 1 },
// ]);

exports.fileUploads = upload.single("image");

// Multer validation errors
exports.catchErr = function (error, req, res, next) {
  res.status(400).json({ error: error.message });
};

// Multer validation errors
exports.catchErr = function (error, req, res, next) {
  res.status(400).json({ error: error.message });
};
