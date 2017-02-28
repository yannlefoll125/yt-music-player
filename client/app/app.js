'use strict';

import angular from 'angular';
// import ngAnimate from 'angular-animate';
import ngCookies from 'angular-cookies';
import ngResource from 'angular-resource';
import ngSanitize from 'angular-sanitize';

const ngRoute = require('angular-route');

import uiBootstrap from 'angular-ui-bootstrap';
import bsAffix from 'angular-bootstrap-affix';
//import bsAffix from '../../bower_components/angular-bootstrap-affix/dist/angular-bootstrap-affix.min.js';
// import ngMessages from 'angular-messages';


import {
  routeConfig
} from './app.config';

import navbar from './navbar/navbar.component';
import footer from '../components/footer/footer.component';
import main from './main/main.component';
import constants from './app.constants';
import util from '../components/util/util.module';
import musicBrainzRoute from './musicBrainz/musicBrainz.component';

//Import components
import AlbumComponent from './album/album.component'

//Import controllers
import rootController from './root/root.controller';

//True to use youtube data api, false to use a mock service.
const YOUTUBE_DATA_API = true;

//Import services modules
import youtubeDataApiRealService from './youtubeDataApiService/youtubeDataApiService.service';
import youtubeDataApiMockService from '../mock/youtubeDataApiMockService/youtubeDataApiMockService.service'

if(YOUTUBE_DATA_API) {
	var youtubeDataApiService = youtubeDataApiRealService;
} else {
	var youtubeDataApiService = youtubeDataApiMockService;
}

import searchResultModel from './searchResultModel/searchResultModel.service';

import albumModel from './album/model/albumModel.service';

import musicBrainzApi from './musicBrainz/api/musicBrainzApi.service';

import ytPlayer from './ytPlayer/ytPlayer.directive';

import secToMinSec from './secToMinSec/secToMinSec.filter';

import './app.less';


angular.module('ytMusicPlayerApp', [ngCookies, ngResource, ngSanitize, ngRoute, uiBootstrap, bsAffix, navbar, musicBrainzRoute,
   main, constants, util, youtubeDataApiService, rootController, AlbumComponent, searchResultModel, albumModel, ytPlayer, secToMinSec,
   musicBrainzApi

])
  .config(routeConfig)
  .config(['$httpProvider',function($httpProvider) {
    $httpProvider.defaults.cache = true;
  }]);

angular.element(document)
  .ready(() => {
    angular.bootstrap(document, ['ytMusicPlayerApp'], {
      strictDi: true
    });
  });

import '../touch';
