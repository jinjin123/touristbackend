'use strict'
const mongoHelper = require('../utils/mongoUtils')
const config =require('../config')
var userDBModel = require('../models/userimg.js');
var regDBModel = require('../models/registerimg.js');
var userimg =new userDBModel.Schema("userimg").model;
var regimg =new regDBModel.Schema("regimg").model;
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
    var data = {};
    data.title   = '目的地';
    data.content = 'user-login';
    res.render('index',data)
};

exports.search = function (req, res ) {
    var data = {};
    data.title   = '目的地';
    data.content = 'user-search';
    res.render('index',data)
};