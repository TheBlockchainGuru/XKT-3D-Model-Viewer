// import express (after npm install express)
const express = require('express');
const fs = require('fs');
const multer = require('multer');
const cors = require('cors');

// create new express app and save it as "app"
const app = express();

// server configuration
const PORT = 4000;

app.use(cors());

const storage = multer.diskStorage({
	destination: function (req, file, cb) {
		cb(null, '../frontend/public/xkt')
	},
	filename: function (req, file, cb) {
		cb(null, `model.xkt`)
	}
})

const upload = multer({ storage: storage }).array('file');

// create a route for the app
app.post('/upload',function(req, res) {
    upload(req, res, function (err) {
		if (err instanceof multer.MulterError) {
			return res.status(500).json(err)
		} else if (err) {
			return res.status(500).json(err)
		}

      	return res.status(200).send(req.file)
    })

	return res.status(200).send({ data: 'success' });
});

// make the server listen to requests
app.listen(PORT, () => {
  console.log(`Server running at: http://localhost:${PORT}/`);
});