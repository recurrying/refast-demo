import 'babel-polyfill';
import React from 'react';
import { hydrate } from 'react-dom';
import App from '../common/app';

const rootEl = document.getElementById('app');

const { counter } = window.__PRELOADED_STATE__;

hydrate(<App counter={counter} />, rootEl);
