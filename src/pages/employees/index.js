export class Index {

  configureRouter(config, router) {
    config.map([
      { route: ['','index'],          name: 'list',           moduleId: 'pages/employees/list',            nav: false, title: 'Employees' },
      { route: 'create',              name: 'create',         moduleId: 'pages/employees/editor',          nav: false, title: 'Create Employee' },
      { route: 'edit/:initial',           name: 'edit',           moduleId: 'pages/employees/editor',          nav: false, title: 'Edit Employee' },
      { route: 'view/:initial',           name: 'view',           moduleId: 'pages/employees/viewer',          nav: false, title: 'View Employee' }
    ]);

    this.router = router;
  }
}
