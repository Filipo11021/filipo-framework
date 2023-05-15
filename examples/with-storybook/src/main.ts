import { render } from '@filipo/framework';

import './style.css';
import { App } from './app';

const app = document.getElementById('app');
if (!app) throw Error('app not exist');

render(app, App);
