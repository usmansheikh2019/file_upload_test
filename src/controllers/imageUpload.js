const path = require("path");
const pathToFileUploads = path.join(__dirname, "../../uploads");
exports.imageUpload = async function (req, res) {
  try {
    if (req.file) {
      const filename = req.file.filename;
      req.file.path = path.join(pathToFileUploads, `/${filename}`);
    }
    res.status(201).json({ message: "Success" });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};
