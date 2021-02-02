import mongoose from 'mongoose';
import app from './backend/src/main';

require('dotenv').config();

const port = process.env.DEV_PORT;

mongoose
  .connect(process.env.CONNECTION, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('Conectado ao mongo!!');
    app.emit('pronto');
  })
  .catch((e) => {
    console.error(e);
  });

app.on('pronto', () => {
  app.listen(port, () => {
    console.log(`servido rodando na porta ${port}`);
  });
});
