const util = require('util');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const userSchema = new Schema({
    filename:String,
    path:String,
    des:String,
    create_date: { type: Date, default: Date.now }
});
mongoose.model('userimg', userSchema);
module.exports.Schema =function (modelName){
    return{model:mongoose.model(modelName)};
}