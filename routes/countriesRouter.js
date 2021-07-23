import express from 'express';
import { body } from 'express-validator';
import {
  createCountry,
  deleteCountry,
  getAllCountries,
  getSingleCountry,
  updateCountry
} from '../controllers/countries.js';

const countriesRouter = express.Router();

countriesRouter.get('/', getAllCountries);
countriesRouter.get('/:code', getSingleCountry);
countriesRouter.post(
  '/',
  body('name').isString().isLength({ min: 5 }),
  body('alpha2Code').isISO31661Alpha2(),
  body('alpha3Code').isISO31661Alpha3(),
  createCountry
);
countriesRouter.put('/:code', updateCountry);
countriesRouter.delete('/:code', deleteCountry);

export default countriesRouter;
