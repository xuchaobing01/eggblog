/**
 * Created by xuchaobing on 2017/7/24.
 */

module.exports=app=>{

    class UserService extends app.Service{

        * index(params){
            let users=yield this.ctx.model.User.find(params);
            let result={};
            result.meta={total:users.length};
            result.data=users;
            return result;
        }

        * show(id){
            let user=yield this.ctx.model.User.find({'_id':Object(id)});
            return user;
        }

        * create(request){
            let result=yield this.ctx.model.User.create(request);
            return result;
        }

        * update(id,request){
            let result=yield this.ctx.model.User.findOneAndUpdate({'_id':Object(id)},{$set:request});
            return result;
        }

        * destroy(id){
            let result=yield this.ctx.model.User.remove({'_id':id});
            return result;
        }

    }
    return UserService;
};
