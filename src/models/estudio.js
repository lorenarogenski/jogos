const estudio = (body, id = null) => {
    const now = new Date();
    return {
        id: id || Date.now(),
        nome: body.nome.toUpperCase(),
        criado: now,
        atualizado: now
    };
};

module.exports = estudio;