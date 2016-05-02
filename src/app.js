export class App {
  configureRouter(config, router) {
    config.title = 'Home';
    config.map([
      { route: '',              name: 'login',      moduleId: 'pages/login/index',      nav: false,  title: 'Login' },
      { route: 'periods',              name: 'periods',      moduleId: 'pages/periods/index',      nav: true,  title: 'Periods' },
      { route: 'users',              name: 'users',      moduleId: 'pages/users/index',      nav: true,  title: 'Users' },
      { route: 'dashboard',     name: 'dashboard',  moduleId: 'pages/dashboard/index',  nav: false,   title: 'Dashboard' },
      // { route: 'child-router',  name: 'child-router', moduleId: 'child-router', nav: true,  title: 'Child Router' },
      // { route: 'daftar',        name: 'daftar',       moduleId: 'teman/index',  nav: true,  title: 'Daftarkan KTP untuk Ahok' },
      // { route: 'sukses',        name: 'sukses',       moduleId: 'teman/sukses', nav: false, title: 'Sukses' },
      // { route: 'cetak',         name: 'cetak',        moduleId: 'teman/cetak',  nav: true,  title: 'Cetak' }
    ]);

    this.router = router;
  }
}
