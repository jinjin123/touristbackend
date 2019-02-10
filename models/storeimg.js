const util = require('util');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const storeSchema = new Schema({
    filename:String,
    path:String,
    type:String,
    create_date: { type: Date, default: Date.now }
});
mongoose.model('storeimg', storeSchema);
module.exports.Schema =function (modelName){
    return{model:mongoose.model(modelName)};
}