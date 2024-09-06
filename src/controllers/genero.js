const genero = require('../models/genero');

const bd = [];

const listar = () => bd;

const mostrar = id => bd.find(el => el.id == id);

const criar = (body) => {
    const novoRegistro = genero(body);
    if(novoRegistro) {
        bd.push(novoRegistro);
        return 201;
    }
    return 400;
};

const atualizar = (body, id) => {
    const indice = bd.findIndex(el => el.id == id);
    if(indice !== -1) {
        const registroAtualizado = {... bd[indice], ...genero(body, id), atualizado: new Date()};
        bd[indice] = registroAtualizado;
        return 200;
    }
    return 400;
};

const deletar = id => {
    const indice = bd.findIndex(el => el.id == id);
    if(indice != -1) {
        bd.splice(indice, 1);
        return 200;
    }
    return 400;
};

module.exports = {
    listar, 
    mostrar,
    criar, 
    atualizar,
    deletar
};