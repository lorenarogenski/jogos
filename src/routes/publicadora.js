const express = require('express');
const publicadoraController = require('../controllers/publicadora');
const router = express.Router();

router.get('/', (req, res) => res.json(publicadoraController.listar()));
router.get('/:id', (req, res) => req.json(publicadoraController.mostrar(req.params.id)));
router.post('/', (req, res) => res.sendStatus(publicadoraController(req.body)));
router.put('/:id', (req, res) => res.sendStatus(publicadoraController.atualizar(req.body, req.params.id)));
router.delete('/:id', (req, res) => res.sendStatus(publicadoraController.deletar(req.params.id)));

module.exports = router;