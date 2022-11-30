const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('Ejercicio_1')
})

module.exports = router;