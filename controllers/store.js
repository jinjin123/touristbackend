'use strict'
const config =require('../config');
const storeDBModel = require('../models/storeimg.js');
const storeimg =new storeDBModel.Schema("storeimg").model;
exports.index = function (req, res ) {
    storeimg.find({},function (err,storeImgList){
        if (err) return console.error(err);
        var data = {};
        data.storelist = storeImgList
        data.title   = '目的地';
        data.content = 'store-index';
        res.render('index',data)
    })
};
exports.add = function (req, res ) {
    var storeImg= new storeimg();
    storeImg.filename =req.file.filename 
    storeImg.path = config.host + config.port + '/images/' + req.file.filename
    storeImg.type = req.body.type
    storeImg.save(function (err,storeImg){
        if (err) return console.error(err);
    })
    storeimg.find({},function (err,storeImg){
        if (err) return console.error(err);
        res.json({
            "code":0,
            "data":storeImg
        })
    })
}
exports.del = function(req,res){
    console.log(req.body)
    var where = {"filename": req.body.filename}
    storeimg.remove(where,function (err,storeimg){
        if (err) return console.error(err);
        res.json({
            "code":0,
            "data":storeimg
        })
    })
}
exports.traffic = function (req, res ) {
    var data = {};
    data.title   = '目的地';
    data.content = 'store-traffic';
    res.render('index',data)
};
exports.auth = function (req, res ) {
    var data = {};
    data.title   = '目的地';
    data.content = 'store-auth';
    res.render('index',data)
};

exports.ticket = function (req, res ) {
    var data = {};
    data.title   = '目的地';
    data.content = 'store-ticket';
    res.render('index',data)
};