import express from 'express';
import countriesRouter from './routes/countriesRouter.js';
const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use('/api/countries', countriesRouter);
app.use('/', (req, res) => res.send('Welcome to Countries API'));

app.listen(port, () => console.log(`Server running on port: ${port}`));
