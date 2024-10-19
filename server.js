import dotenv from "dotenv";
import app from './src/app.js'; // ES Module, e certifique-se de adicionar ".js" no caminho


dotenv.config();

const port = process.env.PORT || 80;

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
