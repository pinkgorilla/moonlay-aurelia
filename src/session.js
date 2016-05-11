'use strict'
import {inject} from 'aurelia-framework'
import {Settings} from './app-config' 

@inject(Settings)
export class Session
{
  constructor(settings)
  {
    this.settings = settings; 
  }  
  
  setToken(token)
  {
    var Cookies  = require('js-cookie');
    Cookies.set(this.settings.cookieName, token);
  }
  
  getToken(){
    
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
