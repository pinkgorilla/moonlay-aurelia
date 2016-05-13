'use strict'
import {inject, transient} from 'aurelia-framework'
import {Settings} from './app-config' 

@inject(Settings)
export class Session
{
  constructor(settings)
  {
    this.settings = settings; 
  }  
  
  get token(){ 
    var Cookies  = require('js-cookie');
    var token = Cookies.get(this.settings.cookieName);
    return token;
  }
  
  set token(value){    
    var Cookies  = require('js-cookie');
    Cookies.set(this.settings.cookieName, value);
  }
}
