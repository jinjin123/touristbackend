"use strict";

var config = require('../config');
var userDBModel = require('../models/userimg.js');
var crypt = require('../utils/crypt.js');
var userimg =new userDBModel.Schema("userimg").model;
var basicAuth = require("basic-auth");
var remDBModel = require('../models/remimg.js');
var remimg =new remDBModel.Schema("remimg").model;
var flDBModel = require('../models/flimg.js');
var flimg =new flDBModel.Schema("flimg").model;

exports.login = function (req, res ) {
        function unauthorized(res) {
            console.log("需要登录");
            res.set('WWW-Authenticate', 'Basic realm=Input User&Password');
            return res.sendStatus(401);
        }
    
        var user = basicAuth(req);
    
        if (!user || !user.name || !user.pass) {
            return unauthorized(res);
        }
    
    
        if (user.name === 'sj' && user.pass === '123') {
            //return next();
            var data = {}
            data.title   = '首页关注';
            data.content = 'index-follow';
            console.log("login success");
            // res.render('index',data)
            res.redirect('http://localhost:4000/index/follow');　
        } else {
            console.log("未能登录");
            return unauthorized(res);
        }

};
exports.api_index_fl = function (req, res ) {
    flimg.find({},function (err,desimgList){
        if (err) return console.error(err);
        let data = {}
        let tmp = []
        let imgs =[]
        for(let i=0,b=desimgList.length;i<b;i++){
           let img = desimgList[i].path
           data.sybj=img
           data.sytixing=img
           data.sygztuce1=img
           data.sygztuce2=img
           data.sygztuce3=img
           data.sygztuce4=img
           data.sygztuce5=img
           data.sygztx1=img
           data.sygzzuobiao1=img
           data.sygztx1=img
           data.sygztuceB=img
           data.sygzzuobiao1=img
           data.sygztuceCbf0=img
           data.sygztuceCbf3=img
           data.sygztuceC=img
           data.sygztuceB=img
           for(let i=0,b=desimgList.length;i<b;i++){
            let img = desimgList[i].path
            let title = '攻略'
            let intro = '逛街玩乐两不误，嗨爆二日嗨嗨嗨'
            imgs.push(img)
            tmp.push({"sygltu":img,"sygonglue":title,"intro":intro,
            "img":img,"img1":img,"img2":img,"user":'zhangcece',
            "title":title,
            "time":"2018.10.08","neirong":'这个有点绚丽','nicheng':'心有宁希:',
             "hongxin":img,'shuzi1':'20'})
           }
           let info =[{lbdanxiang:'关注'},
           {lbdanxiang:'推荐'},
           {lbdanxiang:'自驾'},
           {lbdanxiang:'情侣'},
           {lbdanxiang:'亲子'}]
            data.yjpbt='世界尽头与冷酷仙境，冰岛10日顺时针环岛'
            data.yjpemailn='199',
            data.sygzwenzibt='#一次不能错过的体验 ',
            data.yjpeyen='199',
            data.sygzdayago='2天前',
            data.sygzshanghai='冰岛',
            data.sygzgengduohuifu='更多回复',
            data.yjptime='出发时间',
            data.sygzfenfenzhi='粉粉只',
            data.syliebiao=info
            data.sygzwenzi1='一个人逛迪士尼 简直不要太爽 所有项目都不用排队' 
            data.sygl= tmp
            data.imgUrls1 = imgs
            data.yjpname='Yozuki毛毛酱',
            data.yjlbt = '世界尽头与冷酷仙境，冰岛10日顺时针环岛'
            data.yjlwz = '一个人逛迪士尼 简直不要太爽 所有项目都不用排队'
            data.sygzdilan = tmp
            data.mddtrip = tmp
        }

        res.json({'data':data})
    })
};
exports.api_index_rem = function (req, res ) {
    remimg.find({},function (err,desimgList){
        if (err) return console.error(err);
        let data = {}
        let tmp = []
        let imgs =[]
        for(let i=0,b=desimgList.length;i<b;i++){
           let img = desimgList[i].path
           data.sybj=img
           data.sytixing=img
           data.sytjffz3=img
           data.sytjffz4=img
           data.sytjffz5=img
           data.sygztuce4=img
           data.sygztuce5=img
           data.sygztx1=img
           data.sygzzuobiao1=img
           data.sygztx1=img
           data.sygztuceB=img
           data.sygzzuobiao1=img
           data.sygztuceC=img
           data.sygztuceCbf0=img
           data.sygztuceCbf3=img
           data.sytjZH=img
           data.sygztuceB=img
           for(let i=0,b=desimgList.length;i<b;i++){
            let img = desimgList[i].path
            let title = '攻略'
            let intro = '逛街玩乐两不误，嗨爆二日嗨嗨嗨'
            imgs.push(img)
            tmp.push({"sygltu":img,"sygonglue":title,"intro":intro,
            "img":img,"img1":img,"img2":img,"user":'zhangcece',
            "title":title,
            "time":"2018.10.08","neirong":'这个有点绚丽','nicheng':'心有宁希:',
             "hongxin":img,'shuzi1':'20'})
           }
           let info =[{lbdanxiang:'关注'},
           {lbdanxiang:'推荐'},
           {lbdanxiang:'自驾'},
           {lbdanxiang:'情侣'},
           {lbdanxiang:'亲子'}]
            data.yjpbt='世界尽头与冷酷仙境，冰岛10日顺时针环岛'
            data.yjpemailn='199',
            data.sygzwenzibt='#一次不能错过的体验 ',
            data.yjpeyen='199',
            data.sygzdayago='2天前',
            data.sygzshanghai='冰岛',
            data.sytjZHtext='Eva方',
            data.sytjzmy='#周末游',
            data.sytjyy='#一月',
            data.sytjswhy='#三五好友',
            data.sygzgengduohuifu='更多回复',
            data.yjptime='出发时间',
            data.sygzfenfenzhi='粉粉只',
            data.syliebiao=info
            data.sytjwenzikong='香港亲子游：寓教于乐的海洋公园，原来可以这么玩？3天3夜亲子游攻略...',
            data.sygl= tmp
            data.imgUrls1 = imgs
            data.yjpname='Yozuki毛毛酱',
            data.yjlbt = '世界尽头与冷酷仙境，冰岛10日顺时针环岛'
            data.yjlwz = '一个人逛迪士尼 简直不要太爽 所有项目都不用排队'
            data.sygzdilan = tmp
            data.mddtrip = tmp
        }

        res.json({'data':data})
    })
};
exports.recomment = function (req, res ) {
    remimg.find({},function (err,remimgList){
        if (err) return console.error(err);
        var data = {};
        data.remlist =  remimgList
        data.title   = '首页推荐';
        data.content = 'index-recomment';
        res.render('index',data)
    })
};
exports.remadd = function (req, res ) {
    var remImg= new remimg();
    remImg.filename =req.file.filename
    remImg.path = config.host + config.port + '/images/' + req.file.filename
    // desnodeImg.des = req.body.des
    // descateImg.po = req.body.po
    remImg.save(function (err,desImg){
        if (err) return console.error(err);
    })
    remimg.find({},function (err,remimglist){
        if (err) return console.error(err);
        res.json({
            "code":0,
            "data":remimglist
        })
    })
}
exports.remdel = function(req,res){
    var where = {"filename": req.body.filename}
    remimg.remove(where,function (err,remimg){
        if (err) return console.error(err);
        res.json({
            "code":0,
            "data":remimg
        })
    })
}
exports.follow = function (req, res ) {
    flimg.find({},function (err,flimgList){
        if (err) return console.error(err);
        var data = {};
        data.fllist =  flimgList
        data.title   = '首页推荐';
        data.content = 'index-follow';
        res.render('index',data)
    })
};
exports.fladd = function (req, res ) {
    var flImg= new flimg();
    flImg.filename =req.file.filename
    flImg.path = config.host + config.port + '/images/' + req.file.filename
    // desnodeImg.des = req.body.des
    // descateImg.po = req.body.po
    flImg.save(function (err,flImg){
        if (err) return console.error(err);
    })
    flimg.find({},function (err,flimglist){
        if (err) return console.error(err);
        res.json({
            "code":0,
            "data":flimglist
        })
    })
}
exports.fldel = function(req,res){
    var where = {"filename": req.body.filename}
    flimg.remove(where,function (err,flimg){
        if (err) return console.error(err);
        res.json({
            "code":0,
            "data":flimg
        })
    })
}
 exports.addUser = function (){
     var userEntity = new user();
     userEntity.userName=req.body.userName;
     userEntity.password=req.body.password;
     userEntity.save(function (err,userInfo){

     })
 };

exports.userList=function(req, res, next){
     user.find({},function(err,userList){
         res.render('./user/users.html',{userList:userList});

    });

};

exports.userManager = function (req,res,next){

};
