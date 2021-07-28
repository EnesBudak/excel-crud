const mongoose = require('mongoose');

const takimTakipSchema = new mongoose.Schema({
    seriNo: {
        type: String,
        min: 6,
        max: 255
    },
    tanim: {
        type: String,
        min: 6,
        max: 255
    },
     parcaNo: {
        type: String,
        min: 6,
        max: 255
    },
    talepEden: {
        type: String,
        min: 6,
        max: 255
    },
    toplamAdet: {
        type: Number,
    },
    talepAdeti: {
        type: Number
    },
    stoktaKalan: {
        type: Number
    },
    talepTarihi:{
        type:Date,
    },
    teslimAdeti:{
        type:Number,
    },
    teslimTarihi:{
        type:Date,
    },
    guncelStok:{
        type:Number,
    },
    log:{
        type:[String]
    },
    type:{
        type:String,
        enum:['Hurda','Bilenecek']
    },
    takimCinsi:{
        type:String,
        enum : ['Matkap', 'Takma uç', 'Freze','Küre','Kılavuz','T çakı', 'Rayba', 'Pantograf', 'Gövde'],
    }
  

});

module.exports = mongoose.model('TakimTakipListesi', takimTakipSchema);