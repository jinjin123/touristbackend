const util = require('util');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const remSchema = new Schema({
    filename:String,
    path:String,
    // po:String,
    create_date: { type: Date, default: Date.now }
});
mongoose.model('remimg', remSchema);
module.exports.Schema =function (modelName){
    return{model:mongoose.model(modelName)};
}