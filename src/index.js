const express = require('express');
const v1Router = require('./v1/routes/workoutRouter.js');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use('/api/v1/workouts', v1Router)

app.listen(PORT, () => console.log('Servidor escuchando en el puerto ' + PORT));