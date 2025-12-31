const express = require('express');
const mongoose = require('mongoose');
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const bodyParser = require('body-parser');
const Image = require('./model');


require('dotenv').config();

const app = express();

// View Engine
app.set("view engine", "ejs");

// Database Connection
mongoose.connect(process.env.MONGO_URL)
  .then(() => console.log("Connected to MongoDB"))
  .catch(err => console.log("MongoDB Error:", err));
console.log("URI =", process.env.MONGO_URL);

// Middlewares
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Multer Storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  }
});

const upload = multer({ storage: storage });

// Route — Show All Images JSON
app.get('/showimg', (req, res) => {
  Image.find({})
    .then((data) => res.json(data))
    .catch((err) => console.log(err));
});

// Route — Upload Image
app.post('/upload', upload.single('image'), (req, res) => {

  const obj = {
    name: req.body.name,
    desc: req.body.desc,
    img: {
      data: fs.readFileSync(path.join(__dirname + '/uploads/' + req.file.filename)),
      contentType: req.file.mimetype
    }
  };

  Image.create(obj)
    .then(() => res.redirect('/'))
    .catch(err => console.log(err));
});

// Start Server
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log("Server started on port", port);
});
