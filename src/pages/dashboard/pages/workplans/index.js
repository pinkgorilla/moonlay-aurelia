export class Index {
  configureRouter(config, router) {
    config.map([
      {route:['', '/list'], moduleId:'pages/dashboard/pages/workplans/list', name:'list', nav:false, title:'Workplans'},
      {route:'/edit/:month/:period', moduleId:'pages/dashboard/pages/workplans/editor', name:'edit', nav:false, title:'Edit Workplan'}

    ]);

    this.router = router;
  }

}
