'use strict'
const config =require('../config');
const desDBModel = require('../models/desimg.js');
const desimg =new desDBModel.Schema("desimg").model
const desnodeDBModel = require('../models/desnodeimg.js');
const desnodeimg =new desnodeDBModel.Schema("desnodeimg").model
const descateDBModel = require('../models/descateimg.js');
const descateimg =new descateDBModel.Schema("descateimg").model
const usernodeDBModel = require('../models/usernodeimg.js')
const usernodeimg =new usernodeDBModel.Schema("usernodeimg").model;
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
exports.api_des_index = function (req, res ) {
    desimg.find({},function (err,desimgList){
        if (err) return console.error(err);
        // console.log(userImgList)
        let data = {}
        let tmp = []
        for(let i=0,b=desimgList.length;i<b;i++){
           let img = desimgList[i].path
        //    let title = desimgList[i].des
        //    let intro = '逛街玩乐两不误，嗨爆二日嗨嗨嗨'
           data.mddbj=img
           for(let i=0,b=desimgList.length;i<b;i++){
            let img = desimgList[i].path
            let title = desimgList[i].des
            let intro = '逛街玩乐两不误，嗨爆二日嗨嗨嗨'
            tmp.push({"imgUrl":img,"title":title,"intro":intro,
            "img":img,"img1":img,"img2":img,"user":'zhangcece',
            "title":title,
            "time":"2018.10.08","peopleNum":'1934',
             "mddbj":img})
           }
            data.mddtypes =tmp 
            data.mddplayhot = tmp
            data.mddtrip = tmp
        }

        res.json({'data':data})
    })
};
exports.api_des_node = function (req, res ) {
    desnodeimg.find({},function (err,desimgList){
        if (err) return console.error(err);
        let data = {}
        let tmp = []
        let imgs =[]
        for(let i=0,b=desimgList.length;i<b;i++){
           let img = desimgList[i].path
           data.yjlhead=img
           data.yjphead=img
           data.yjpeye=img
           data.yjpemail=img
           data.yjpface=img
           data.yjpaddA=img
           data.yjpaddB=img
           for(let i=0,b=desimgList.length;i<b;i++){
            let img = desimgList[i].path
            let filename = desimgList[i].filename
            let title = desimgList[i].title
            let intro = '逛街玩乐两不误，嗨爆二日嗨嗨嗨'
            imgs.push(img)
            tmp.push({"imgUrls":img,"title":title,"intro":intro,
            "img":img,"img1":img,"img2":img,"user":'zhangcece',
           "filename":filename,"yjlhead":img,"yjphead":img,"yjpeyee":img,"yjpemail":img,"yjpface":img,
            "time":"2018.10.08","peopleNum":'1934',"yjpemailn":'199',
             "mddbj":img,"yjlbt":'世界尽头与冷酷仙境，冰岛10日顺时针环岛',
            "yjlwz":'一个人逛迪士尼 简直不要太爽 所有项目都不用排队',"yjpeyen":'abc',"yjpsj":'2天前'})
           }
            data.yjpbt='世界尽头与冷酷仙境，冰岛10日顺时针环岛'
            data.yjpemailn='199',
            data.yjpeyen='199',
            data.yjpsj='2天前',
            data.yjpplace='冰岛',
            data.yjptime='出发时间',
            data.yjpday='2019/12/20',
            data.yjpaddwenziA='一个人逛迪士尼 简直不要太爽 所有项目都不用排队' 
            data.yjpaddwenziB='一个人逛迪士尼 简直不要太爽 所有项目都不用排队' 
            data.imgUrls = imgs
            data.imgUrls1 = imgs
            data.yjpname='Yozuki毛毛酱',
            data.yjlbt = '世界尽头与冷酷仙境，冰岛10日顺时针环岛'
            data.yjlwz = '一个人逛迪士尼 简直不要太爽 所有项目都不用排队'
            data.mddplayhot = tmp
            data.mddtrip = tmp
        }

        res.json({'data':data})
    })
};
exports.api_des_play = function (req, res ) {
    descateimg.find({},function (err,descateimgList){
        if (err) return console.error(err);
        // console.log(userImgList)
        let data = {}
        let tmp = []
        for(let i=0,b=descateimgList.length;i<b;i++){
           let img = descateimgList[i].path
           data.gldjdcyd=img
           data.glxjp=img
           data.glxjp='新加坡亲子旅游攻略|看完这篇文章，好想...'
           for(let i=0,b=descateimgList.length;i<b;i++){
            let img = descateimgList[i].path
            let title = '哈尔滨'
            let bincheng = '冰城Ｉ俄式建筑'
            let whitee = 'HAERBING'
            tmp.push({"hrbpic":img,"hrbbt":title,"whitee":whitee,
            "xiushipic":img,"img1":img,"img2":img,"bincheng":bincheng,
            "title":title,'cspic':img,'text':'平顶山',
            "time":"2018.10.08","peopleNum":'1934','csml':'城市魅力',
             "city2":img,"city3":img,"num":'4',"chengdu":"成都",'msh':'慢生活美食'})
           }
            data.mdddangjituijian =tmp 
            data.mdd = tmp
            data.mddtax = tmp
            data.mddcsml = tmp
            data.mddcs = tmp
        }

        res.json({'data':data})
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
    // desnodeimg.aggregate([{
    //     $lookup: {
    //         from: 'desnode',
    //         localField: "filename",
    //         foreignField: "_id",
    //         as: "desnode"
    //     }
    // },{
    //     $lookup: {
    //         from: 'usernode',
    //         localField: "content",
    //         foreignField: "_id",
    //         as: "usernode"
    //     } 
    //     }],function (err,desnodeimgList){
    //     if (err) return console.error(err);
    //     console.log(desnodeimgList)
    //     var data = {};
    //     data.desnodelist = desnodeimgList
    //     data.title   = '目的地';
    //     data.content = 'des-node';
    //     res.render('index',data)
    // }) 
};

exports.nodeadd = function (req, res ) {
    var desnodeImg= new desnodeimg();
    if(req.file){
        desnodeImg.filename =req.file.filename
        desnodeImg.path = config.host + config.port + '/images/' + req.file.filename
        desnodeImg.title = req.body.title
        desnodeImg.content = req.body.content
        desnodeImg.tag = req.body.tag
        // desnodeImg.po = req.body.po
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
    }else{
        let title = req.body.title
        let content = req.body.content
        let tag = req.body.tag
        let filearr = req.files
        for(let i=0,b=filearr.length;i<b;i++){
            var desnodeImg = new desnodeimg();
            desnodeImg.filename = filearr[i].filename
            desnodeImg.title = title
            desnodeImg.tag = tag
            desnodeImg.content =content
            desnodeImg.path = config.host + config.port + '/images/' + filearr[i].filename
            desnodeImg.save(function (err,desnodeimglist){
                if (err) return console.error(err);
                // not res for wx
            }) 
    
        }
    }
}
exports.nodedel = function(req,res){
    // console.log(req.body)
    var where = {"title": req.body.title}
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
    // descateImg.po = req.body.po
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