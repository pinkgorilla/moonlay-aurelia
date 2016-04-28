export class Index{
  configureRouter(config, router)
  {
      config.map([
          {route:['', '/home'], name:'dashboard-home', moduleId:'pages/dashboard/home', nav:true, title:'Home'},
          {route:'/workplans', name:'dashboard-workplans', moduleId:'pages/dashboard/pages/workplans/index', nav:true, title:'Workplans'}
      ]);

      this.router = router;
  }
}
