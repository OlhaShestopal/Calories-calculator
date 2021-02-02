import { createStoreon } from 'storeon';
import { storeonDevtools, storeonLogger } from 'storeon/devtools';
import { persistState } from '@storeon/localstorage'
import {calories} from './calories/calories.js';
import {eatings} from './eating/eatings.js'
import {products} from './products/products.js'


const isDev = process.env.NODE_ENV !== 'production';

const store = createStoreon([
  calories,
  eatings,
  products,
  isDev && storeonDevtools,
  isDev && storeonLogger,
  persistState(['totalCalories'])
]);

export {
  store
}