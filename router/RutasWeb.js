const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render("index")
})

router.get('/Ejercicio_1', (req, res) => {
    res.render("Ejercicio_1")
})

module.exports = router;