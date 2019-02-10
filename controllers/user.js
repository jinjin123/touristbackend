'use strict'
const mongoHelper = require('../utils/mongoUtils')
const config =require('../config')
var userDBModel = require('../models/userimg.js');
var usernodeDBModel = require('../models/usernodeimg.js');
var regDBModel = require('../models/registerimg.js');
var lgDBModel = require('../models/loginimg.js');
var userimg =new userDBModel.Schema("userimg").model;
var regimg =new regDBModel.Schema("regimg").model;
var lgimg =new lgDBModel.Schema("lgimg").model;
var usernodeimg =new usernodeDBModel.Schema("usernodeimg").model;
exports.index = function (req, res ) {
    userimg.find({},function (err,userImgList){
        if (err) return console.error(err);
        var data = {};
        data.userlist = userImgList
        data.title   = 'user-index';
        data.content = 'user-index';
        res.render('index',data)
    })
};
exports.add = function (req, res ) {
    var userImg = new userimg();
    userImg.filename =req.file.filename 
    userImg.path = config.host + config.port + '/images/' + req.file.filename
    userImg.des = req.body.des
    userImg.po = req.body.po
    userImg.save(function (err,userImg){
        if (err) return console.error(err);
    })
    userimg.find({},function (err,userImgList){
        if (err) return console.error(err);
        res.json({
            "code":0,
            "data":userImgList
        })
    })
}
exports.del = function(req,res){
    console.log(req.body)
    var where = {"des": req.body.des}
    userimg.remove(where,function (err,userImg){
        if (err) return console.error(err);
        res.json({
            "code":0,
            "data":userImg
        })
    })
}

exports.register = function (req, res ) {
    regimg.find({},function (err,regimglist){
        if (err) return console.error(err);
        var data = {};
        data.reglist = regimglist
        data.title   = '目的地';
        data.content = 'user-register';
        res.render('index',data)
    })
};
exports.registeradd = function (req, res ) {
    var regImg = new regimg();
    regImg.filename =req.file.filename 
    regImg.path = config.host + config.port + '/images/' + req.file.filename
    regImg.des = req.body.des
    regImg.save(function (err,regImg){
        if (err) return console.error(err);
    })
    regimg.find({},function (err,regImgList){
        if (err) return console.error(err);
        res.json({
            "code":0,
            "data":regImgList
        })
    })
}

exports.regdel = function(req,res){
    console.log(req.body)
    var where = {"filename": req.body.filename}
    regimg.remove(where,function (err,regImg){
        if (err) return console.error(err);
    })
    regimg.find({},function (err,regImgList){
        if (err) return console.error(err);
        res.json({
            "code":0,
            "data":regImgList
        })
    }) 
}

exports.login = function (req, res ) {
    lgimg.find({},function (err,lgimglist){
        if (err) return console.error(err);
        var data = {};
        data.lgimglist = lgimglist
        data.title   = '目的地';
        data.content = 'user-login';
        res.render('index',data)
    })
};

exports.lgadd = function (req, res ) {
    var lgImg = new lgimg();
    lgImg.filename =req.file.filename 
    lgImg.path = config.host + config.port + '/images/' + req.file.filename
    lgImg.des = req.body.des
    lgImg.save(function (err,lgImg){
        if (err) return console.error(err);
    })
    lgimg.find({},function (err,lgImgList){
        if (err) return console.error(err);
        res.json({
            "code":0,
            "data":lgImgList
        })
    })
}

exports.nodeadd = function (req, res ) {
    // console.log(req.files)
    let filearr = req.files
    for(let i=0,b=filearr.length;i<b;i++){
        var usernodeImg = new usernodeimg();
        usernodeImg.filename = filearr[i].filename
        usernodeImg.path = config.host + config.port + '/images/' + filearr[i].filename
        usernodeImg.save(function (err,usernodeImg){
            if (err) return console.error(err);
              res.end("aaa")
        }) 

    }
}

exports.lgdel = function(req,res){
    // console.log(req.body)
    var where = {"filename": req.body.filename}
    lgimg.remove(where,function (err,lgImg){
        if (err) return console.error(err);
    })
    lgimg.find({},function (err,lgImgList){
        if (err) return console.error(err);
        res.json({
            "data":lgImgList
        })
    })
}

exports.search = function (req, res ) {
    var data = {};
    data.title   = '目的地';
    data.content = 'user-search';
    res.render('index',data)
};