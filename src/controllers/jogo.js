const jogo = require('../models/jogo');

const bd = [];

const listar = () => bd;

const mostrar = (body) => {
    const novoRegistro = jogo(body);
    if(novoRegistro) {
        bd.push(novoRegistro);
        return 201;
    }
    return 400;
};

const atualizar = (body, id) => {
    const indice = bd.findIndex(el => el.id == id);
    if(indice !== -1) {
        const registroAtualizado = {...bd[indice], ...jogo(body, id), atualizado: new Date()};
        bd[indice] = registroAtualizado;
        return 200;
        };
};

const deletar = id => {
    const indice = bd.findIndex(el => el.id == id);
    if(indice != -1) {
        bd.splice(indice, 1);
        return 200;
    }
    return 404;
};

module.exports = {
    listar, 
    mostrar,
    atualizar,
    deletar
};