const express = require('express');
const generoController = require('../controllers/genero');
const router = express.Router();

router.get('/', (req, res) => res.json(generoController.listar()));
router.get('/:id', (req, res) => req.json(generoController.mostrar(req.params.id)));
router.post('/', (req, res) => res.sendStatus(generoController(req.body)));
router.put('/:id', (req, res) => res.sendStatus(generoController.atualizar(req.body, req.params.id)));
router.delete('/:id', (req, res) => res.sendStatus(generoController.deletar(req.params.id)));

module.exports = router;