'use strict';

module.exports = app => {
  app.get('/', 'home.index');
  app.get('/users', 'user.index');
  app.get('/user', 'user.show');
  app.get('/create', 'user.create');
  app.get('/update', 'user.update');
  app.get('/destroy', 'user.destroy');

  app.get('/admin', 'home.index');
  app.get('/admin/users', 'user.index');
  app.get('/admin/user', 'user.show');
  app.get('/admin/create', 'user.create');
  app.get('/admin/update', 'user.update');
  app.get('/admin/destroy', 'user.destroy');
};
