const mongoose  = require("mongoose");
// const bcrypt = require('bcrypt');

const DataSchema = new mongoose.Schema({
   name_user:String,
   email_user:String,
   type_user:{type:Number, default:1},
   password_user:String
}, {
    timestamps:true,
});

// DataSchema.pre('save', (next) => {
//     if(!this.isModified("password_user")){
//         return next();
//     } else {
//         this.password_user = bcrypt.hashSync(this.password_user,10);
//         next();
//     };
// });

// DataSchema.pre('findByIdAndUpdate', (next) => {
//     let password = this.getUpdate().password_user+'';
//     if(password.length  < 55) {
//         this.getUpdate().password_user = bcrypt.hashSync(password,10);
//     }
//     next();
// });

const user = mongoose.model('User', DataSchema);

module.exports = user;
