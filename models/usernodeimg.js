const util = require('util');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const usernodeSchema = new Schema({
    filename:String,
    path:String,
    title:String,
    content:String,
    tag:String,
    create_date: { type: Date, default: Date.now }
});
mongoose.model('usernodeimg', usernodeSchema);
module.exports.Schema =function (modelName){
    return{model:mongoose.model(modelName)};
}