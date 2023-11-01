import { fileURLToPath } from 'url';
import path from 'path';
import express from 'express';
import cors from 'cors';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = 4000;

app.use(express.static('public'));
app.use(cors());

app.get('/music', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'onlymp3.to - Kendrick Lamar M.A.A.D. City Feat. MC eiht -10yrPDf92hY-192k-1698776278.mp3'));
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
