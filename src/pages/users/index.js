export class Index {

  configureRouter(config, router) {
    config.map([
      { route: ['','index'],          name: 'list',           moduleId: 'pages/users/list',            nav: false, title: 'Users' },
      { route: 'create',              name: 'create',         moduleId: 'pages/users/editor',          nav: false, title: 'Create User' },
      { route: 'edit/:username',           name: 'edit',           moduleId: 'pages/users/editor',          nav: false, title: 'Edit User' },
      { route: 'view/:username',           name: 'view',           moduleId: 'pages/users/viewer',          nav: false, title: 'View User' }
    ]);

    this.router = router;
  }
}
