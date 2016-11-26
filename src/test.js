import {inject} from 'aurelia-framework';
import {initialize} from 'aurelia-pal-browser';
initialize();

export class Test {
  id="";

  activate(params, routeConfig) {
    this.routeConfig = routeConfig;

    this.id = params.id;
    this.routeConfig.navModel.setTitle(this.id);
  }
}
