import express from 'express';
import countries from './data/countries.js';

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.get('/api/countries', (req, res) => res.json(countries));
app.post('/api/countries', (req, res) => {
  const newCountry = {
    id: countries.length + 1,
    ...req.body
  };
  countries.push(newCountry);
  res.json(newCountry);
});
app.use('/', (req, res) => res.send('Welcome to Countries API'));

app.listen(port, () => console.log(`Server running on port: ${port}`));
