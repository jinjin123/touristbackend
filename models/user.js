const util = require('util');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const userSchema = new Schema({
    userName:String,
    password:String,
    email:String,
    create_date: { type: Date, default: Date.now }
});
mongoose.model('user', userSchema);
module.exports.Schema =function (modelName){
    return{model:mongoose.model(modelName)};
}