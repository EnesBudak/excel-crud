const mongoose = require('mongoose');

const takimListesiSchema = new mongoose.Schema({
    siraNo: {
        type: Number,
    },
    seriNo: {
        type: String
    },
    tanim: {
        type: String
    },
    takimAdeti: {
        type: Number,
    },
    takimCinsi:{
        type:String,
        enum : ['Matkap', 'Takma uç', 'Freze','Küre','Kılavuz','T çakı', 'Rayba', 'Pantograf', 'Gövde'],
    }
  

});

module.exports = mongoose.model('TakimListesi', takimListesiSchema);