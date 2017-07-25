'use strict';

module.exports = app => {
  class HomeController extends app.Controller {
    * index() {
      const data={title:'hello admin'};
      yield this.ctx.render('home.tpl',data);

    }
  }
  return HomeController;
};
