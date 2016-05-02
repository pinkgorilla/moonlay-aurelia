'use strict'
import {inject} from 'aurelia-framework'
import {Cookie} from 'aurelia-cookie'
import {Settings} from 'app-config'

@inject(Settings)
export class Session
{
  constructor(settings)
  {
    this.settings = settings;
    var cookie = Cookie.get(this.settings.cookieName);
    this.token = cookie;
  }
}
