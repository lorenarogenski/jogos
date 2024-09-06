const express = require('express');
const estudioRoutes = require('./routes/estudio');
const generoRoutes = require('./routes/genero');
const jogoRoutes = require('./routes/jogo');
const publicadoraRoutes = require('./routes/publicadora')
const app = express();
const port = 3000;

app.use(express.json());

app.use('/estudio', estudioRoutes);
app.use('/genero', generoRoutes);
app.use('/jogo', jogoRoutes);
app.use('/publicadora', publicadoraRoutes),

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});