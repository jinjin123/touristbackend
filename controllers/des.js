'use strict'
exports.index = function (req, res ) {
        var data = {};
        data.title   = '目的地';
        data.content = 'des-index';
        res.render('index',data)
};

exports.recomment = function (req, res ) {
    var data = {};
    data.title   = '目的地';
    data.content = 'des-recomment';
    res.render('index',data)
};
exports.node = function (req, res ) {
    var data = {};
    data.title   = '目的地';
    data.content = 'des-node';
    res.render('index',data)
};

exports.cate = function (req, res ) {
    var data = {};
    data.title   = '目的地';
    data.content = 'des-cate';
    res.render('index',data)
};