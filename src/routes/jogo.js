const express = require('express');
const jogoController = require('../controllers/jogo');
const router = express.Router();

router.get('/', (req, res) => res.json(jogoController.listar()));
router.get('/:id', (req, res) => res.json(jogoController.mostrar(req.params.id)));
router.post('/', (req, res) => res.sendStatus(jogoController.criar(req.body)));
router.put('/:id', (req, res) => res.sendStatus(jogoController.atualizar(req.body, req.params.id)));
router.delete('/:id', (req, res) => res.sendStatus(jogoController.deletar(req.params.id)));

module.exports = router;