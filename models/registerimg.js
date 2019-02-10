const util = require('util');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const regSchema = new Schema({
    filename:String,
    path:String,
    create_date: { type: Date, default: Date.now }
});
mongoose.model('regimg', regSchema);
module.exports.Schema =function (modelName){
    return{model:mongoose.model(modelName)};
}