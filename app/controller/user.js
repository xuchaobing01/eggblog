'use strict';

module.exports = app => {

    class UserController extends app.Controller {

        //查
        * index() {
            let params={};
            this.ctx.body =yield this.service.user.index(params);
        }

        //查询one
        * show() {
            let id='59755795766c3d26c855126b';
            this.ctx.body =  yield this.service.user.show(id);
        }

        //增
        * create() {
            const request={
                username:'test',
                password:'654321'
            };
            const ctx = this.ctx;
            ctx.body= yield ctx.service.user.create(request);
        }

        //改
        * update(){
            const id='59755795766c3d26c855126b';
            const request={
                username:'测试用户2',
                password:'123123'
            };

            this.ctx.body=yield this.service.user.update(id,request);

        }

        //删
        * destroy(){
            let id='59759bb2aa839e0ce0d62137';
            this.ctx.body=yield this.service.user.destroy(id);
        }

    }

    return UserController;

};
