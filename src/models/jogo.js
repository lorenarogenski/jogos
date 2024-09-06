const jogo = (body, id = null) => {
    const now = new Date();
    return {
        id: id || Date.now(),
        genero_id: body.genero_id,
        estudio_id: body.estudio_id,
        publicadora_id: body.publicadora_id,
        lancado: body.lancado,
        criado: now,
        atualizado: now
    };
};

module.exports = jogo;