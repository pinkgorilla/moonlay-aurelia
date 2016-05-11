export class App {
  configureRouter(config, router) {
    config.title = 'Aurelia';
    config.map([      
      { route: '',              name: 'login',      moduleId: 'pages/login/index',      nav: false,       title: 'Login' },
      { route: 'periods',       name: 'periods',    moduleId: 'pages/periods/index',    nav: true,        title: 'Periods' },
      { route: 'users',         name: 'users',      moduleId: 'pages/users/index',      nav: true,        title: 'Users' },
      { route: 'dashboard',     name: 'dashboard',  moduleId: 'pages/dashboard/index',  nav: false,       title: 'Dashboard' },
    ]);

    this.router = router;
  }
}
