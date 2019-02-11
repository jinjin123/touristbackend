const util = require('util');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const desnodeSchema = new Schema({
    filename:String,
    path:String,
    title:String,
    tag:String,
    content:String,
    create_date: { type: Date, default: Date.now }
});
mongoose.model('desnodeimg', desnodeSchema);
module.exports.Schema =function (modelName){
    return{model:mongoose.model(modelName)};
}