const express = require('express');
const router = express.Router();

router.get('/pdf-viewer', (req, res) => {
    res.render('pdf-viewer/index');
});

module.exports = router;