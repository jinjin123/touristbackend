const util = require('util');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const lgSchema = new Schema({
    filename:String,
    path:String,
    create_date: { type: Date, default: Date.now }
});
mongoose.model('lgimg', lgSchema);
module.exports.Schema =function (modelName){
    return{model:mongoose.model(modelName)};
}