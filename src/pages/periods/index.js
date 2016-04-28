export class Index {

  configureRouter(config, router) {
    config.map([
      { route: ['','index'],          name: 'list',           moduleId: 'pages/periods/list',            nav: false, title: 'Periods' },
      { route: 'create',              name: 'create',         moduleId: 'pages/periods/editor',          nav: false, title: 'Create Period' },
      { route: 'edit/:month/:period',           name: 'edit',           moduleId: 'pages/periods/editor',          nav: false, title: 'Edit Period' },
      { route: 'view/:month/:period',           name: 'view',           moduleId: 'pages/periods/viewer',          nav: false, title: 'View Period' }
    ]);

    this.router = router;
  }
}
