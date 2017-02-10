'use strict';

import angular from 'angular';
// import ngAnimate from 'angular-animate';
import ngCookies from 'angular-cookies';
import ngResource from 'angular-resource';
import ngSanitize from 'angular-sanitize';

const ngRoute = require('angular-route');

import uiBootstrap from 'angular-ui-bootstrap';
// import ngMessages from 'angular-messages';


import {
  routeConfig
} from './app.config';

import navbar from './navbar/navbar.component';
import footer from '../components/footer/footer.component';
import main from './main/main.component';
import constants from './app.constants';
import util from '../components/util/util.module';

//Import components
import AlbumComponent from './album/album.component'

//Import controllers
import rootController from './root/root.controller';

//Import services modules
import youtubeDataApiService from './youtubeDataApiService/youtubeDataApiService.service';
import currentSearchService from './currentSearch/currentSearch.service';

import './app.less';


angular.module('ytMusicPlayerApp', [ngCookies, ngResource, ngSanitize, ngRoute, uiBootstrap, navbar,
   main, constants, util, youtubeDataApiService, rootController, AlbumComponent, currentSearchService

])
  .config(routeConfig);

angular.element(document)
  .ready(() => {
    angular.bootstrap(document, ['ytMusicPlayerApp'], {
      strictDi: true
    });
  });

import '../touch';
