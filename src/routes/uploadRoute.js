const express = require("express");
const route = express();
const multerConfigController = require("../controllers/multerConfig");
const uploadsController = require("../controllers/imageUpload");

route.post(
  "/uploadImage",
  multerConfigController.fileUploads,
  uploadsController.imageUpload,
  multerConfigController.catchErr
);

module.exports = route;
