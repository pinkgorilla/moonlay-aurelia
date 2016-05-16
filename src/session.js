'use strict'
import {inject} from 'aurelia-framework'
import {Settings} from './app-config'

@inject(Settings) 
export class Session {
  constructor(settings) {
    this.settings = settings;
  }
  get data() {
    var Cookies = require('js-cookie');
    var token = Cookies.get(this.settings.cookieName);
    if(token)
      return JSON.parse(token);
    else
      return {token:'', user:{}};
  }
  
  set data(value) {
    var Cookies = require('js-cookie');
    Cookies.set(this.settings.cookieName, JSON.stringify(value));
  }

  get token() {
    return this.data.token;
  }

  remove() {
    return new Promise((resolve, reject) => {
      var Cookies = require('js-cookie');
      Cookies.remove(this.settings.cookieName);
      resolve(true);
    })
  }
}
