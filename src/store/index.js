/**
 * @author:	Emmanuel SMITH <hey@emmanuel-smith.me>
 * project:	ets2-dashboard-skin
 * file: 	index.js
 * Date: 	02/05/2020
 * Time: 	09:24
 */


import { createStore } from 'vuex';
import app             from './modules/_app';
import config          from './modules/_config';
import events          from './modules/_events';
import menu            from './modules/_menu';
import skins           from './modules/_skins';
import telemetry       from './modules/_telemetry';

//Vue.use( Vuex );

const debug = process.env.NODE_ENV !== 'production';

export const store = createStore( {
	modules: {
		skins,
		telemetry,
		config,
		menu,
		app,
		events
	},
	strict:  debug
} );
