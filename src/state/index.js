import { createStoreon } from 'storeon';
import { storeonDevtools, storeonLogger } from 'storeon/devtools';
import { persistState } from '@storeon/localstorage'
import {calories} from './calories/calories';
import {eatings} from './eating/eatings'
import {products} from './products/products'
import {storage} from './storage/storage'

const isDev = process.env.NODE_ENV !== 'production';

const store = createStoreon([
  calories,
  eatings,
  products,
  storage,
  isDev && storeonDevtools,
  isDev && storeonLogger,
  persistState(['storage'])
  // persistState(['listProducts'])
]);

export {
  store
}