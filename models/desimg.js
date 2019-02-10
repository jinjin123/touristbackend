const util = require('util');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const desSchema = new Schema({
    filename:String,
    path:String,
    des:String,
    po:String,
    create_date: { type: Date, default: Date.now }
});
mongoose.model('desimg', desSchema);
module.exports.Schema =function (modelName){
    return{model:mongoose.model(modelName)};
}