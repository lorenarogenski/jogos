const express = require('express');
const estudioController = require('../controllers/estudio');
const router = express.Router();

router.get('/', (req, res) => res.json(estudioController.listar()));
router.get('/:id', (req, res) => req.json(estudioController.mostrar(req.params.id)));
router.post('/', (req, res) => res.sendStatus(estudioController(req.body)));
router.put('/:id', (req, res) => res.sendStatus(estudioController.atualizar(req.body, req.params.id)));
router.delete('/:id', (req, res) => res.sendStatus(estudioController.deletar(req.params.id)));

module.exports = router;