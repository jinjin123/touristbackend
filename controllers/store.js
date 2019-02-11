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
exports.api_store_index = function (req, res ) {
    storeimg.find({},function (err,storeImgList){
        if (err) return console.error(err);
        // console.log(userImgList)
        let tmp = []
        for(let i=0,b=storeImgList.length;i<b;i++){
           let img = storeImgList[i].path
           let type = "距结束还有7天"
           let title = '海南三亚5天4晚自由行 希尔顿泳池房连住 蜈支洲酒店泳池别墅自驾'
           tmp.push({"img":img,"title":title,"price":'9999',"type":type,"text":title,"img1":img,"name":"香港"})
        }
        var data = {};
        data.station =tmp 
        data.discount = tmp
        data.bannerUrls = tmp
        data.sale = tmp
        data.love = tmp
        res.json({'data':data})
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