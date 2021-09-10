const mongoose = require('mongoose');

const takimListesiSchema = new mongoose.Schema({
    siraNo: {
        type: Number,
    },
    seriNo: {
        type: String,
        default:'Girilmedi'
    },
    tanim: {
        type: String,
        default:'Girilmedi'
    },
    parcaNo: {
        type: String,
        min: 6,
        max: 255,
        default:'Girilmedi'
    },
    talepEden: {
        type: String,
        min: 6,
        max: 255,
        default:'Girilmedi'
    },
    toplamAdet: {
        type: Number,
        default:0
    },
    talepAdeti: {
        type: Number,
        default:0
    },
    stoktaKalan: {
        type: Number,
        default:0
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
        default:0
    },
    log:{
        type:[String]
    },
    type:{
        type:String,
        enum:['Hurda','Bilenecek','OGK']
    },
    takimAdeti: {
        type: Number,
        default:0
    },
    takimCinsi:{
        type:String,
        enum : ['Matkap', 'Takma uç', 'Freze','Küre','Kılavuz','T çakı', 'Rayba', 'Pantograf', 'Gövde'],
    }
  

});

module.exports = mongoose.model('TakimListesi', takimListesiSchema);