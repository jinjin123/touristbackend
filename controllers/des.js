'use strict'
const config =require('../config');
const desDBModel = require('../models/desimg.js');
const desimg =new desDBModel.Schema("desimg").model
const desnodeDBModel = require('../models/desnodeimg.js');
const desnodeimg =new desnodeDBModel.Schema("desnodeimg").model
const descateDBModel = require('../models/descateimg.js');
const descateimg =new descateDBModel.Schema("descateimg").model
exports.index = function (req, res ) {
    desimg.find({},function (err,desimgList){
        if (err) return console.error(err);
        var data = {};
        data.deslist = desimgList
        data.title   = '目的地';
        data.content = 'des-index';
        res.render('index',data)
    })
};

exports.add = function (req, res ) {
    var desImg= new desimg();
    desImg.filename =req.file.filename
    desImg.path = config.host + config.port + '/images/' + req.file.filename
    desImg.des = req.body.des
    desImg.po = req.body.po
    desImg.save(function (err,desImg){
        if (err) return console.error(err);
    })
    desimg.find({},function (err,desimglist){
        if (err) return console.error(err);
        res.json({
            "code":0,
            "data":desimglist
        })
    })
}
exports.del = function(req,res){
    var where = {"des": req.body.des}
    desimg.remove(where,function (err,desimg){
        if (err) return console.error(err);
        res.json({
            "code":0,
            "data":desimg
        })
    })
}

exports.recomment = function (req, res ) {
    var data = {};
    data.title   = '目的地';
    data.content = 'des-recomment';
    res.render('index',data)
};
exports.node = function (req, res ) {
    desnodeimg.find({},function (err,desnodeimgList){
        if (err) return console.error(err);
        var data = {};
        data.desnodelist = desnodeimgList
        data.title   = '目的地';
        data.content = 'des-node';
        res.render('index',data)
    })
};

exports.nodeadd = function (req, res ) {
    var desnodeImg= new desnodeimg();
    desnodeImg.filename =req.file.filename
    desnodeImg.path = config.host + config.port + '/images/' + req.file.filename
    // desnodeImg.des = req.body.des
    desnodeImg.po = req.body.po
    desnodeImg.save(function (err,desImg){
        if (err) return console.error(err);
    })
    desnodeimg.find({},function (err,desnodeimglist){
        if (err) return console.error(err);
        res.json({
            "code":0,
            "data":desnodeimglist
        })
    })
}
exports.nodedel = function(req,res){
    var where = {"filename": req.body.filename}
    desnodeimg.remove(where,function (err,desnodeimg){
        if (err) return console.error(err);
        res.json({
            "code":0,
            "data":desnodeimg
        })
    })
}
exports.cate = function (req, res ) {
    descateimg.find({},function (err,descateimgList){
        if (err) return console.error(err);
        var data = {};
        data.descatelist =  descateimgList
        data.title   = '目的地';
        data.content = 'des-cate';
        res.render('index',data)
    })
};

exports.cateadd = function (req, res ) {
    var descateImg= new descateimg();
    descateImg.filename =req.file.filename
    descateImg.path = config.host + config.port + '/images/' + req.file.filename
    // desnodeImg.des = req.body.des
    descateImg.po = req.body.po
    descateImg.save(function (err,desImg){
        if (err) return console.error(err);
    })
    descateimg.find({},function (err,descateimglist){
        if (err) return console.error(err);
        res.json({
            "code":0,
            "data":descateimglist
        })
    })
}
exports.catedel = function(req,res){
    var where = {"filename": req.body.filename}
    descateimg.remove(where,function (err,descateimg){
        if (err) return console.error(err);
        res.json({
            "code":0,
            "data":descateimg
        })
    })
}