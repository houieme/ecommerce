const router = require('express').Router();
const bookRoutes = require('./books');
const path = require('path');


// If no API routes are hit, send the React app
router.use(function(req, res) {
	res.sendFile(path.join(__dirname, '../front/build/index.html'));
});

module.exports = router;