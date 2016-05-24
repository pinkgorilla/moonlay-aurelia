export class Index{
  configureRouter(config, router)
  {
      config.map([
          {route:['', '/home'], name:'dashboard-home', moduleId:'pages/dashboard/home', nav:true, title:'Home'},
          {route:'/workplans', name:'dashboard-workplans', moduleId:'pages/dashboard/pages/workplans/index', nav:true, title:'Workplans'},
          {route:'/workplans/summary', name:'dashboard-workplans-summary', moduleId:'pages/dashboard/pages/workplans/summary/index', nav:true, title:'Workplans - Summary'},          
          {route:'/profile', name:'profile', moduleId:'pages/dashboard/pages/profile/index', nav:false, title:'Profile'}
      ]);

      this.router = router;
  }
}
