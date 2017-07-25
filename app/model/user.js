/**
 * Created by xuchaobing on 2017/7/24.
 */

module.exports=app=>{
    const mongoose=app.mongoose;
    const UserSchema=new mongoose.Schema({
        username:{type:String},
        password:{type:String}
    });
    return mongoose.model('User',UserSchema);
};