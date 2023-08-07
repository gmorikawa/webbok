const express = require('express');
const router = express.Router();

router.get('/pdf-viewer', (req, res) => {
    const { filename } = req?.query;

    res.render('pdf-viewer/index', { filename });
});

module.exports = router;