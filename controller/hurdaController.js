const Hurda = require('../model/Hurda')
exports.getTakimTakipListesi = async (req, res) => {

    try {
    
    //    const yachtType = req.query.type == null ? 'normal' :req.query.type;
    //     console.log(yachtType,"type backend");
   
        const result = await Hurda.find({});
        res.json({
            success: true,
            result
        })

     
    } catch (error) {
        console.log(error);
    }
}
exports.createTakimTakipListesi = async (req, res) => {
    try {

        const takim = new Hurda(req.body);
        const result = await takim.save()
        res.json({
            success: true,
            result
        })
       
    } catch (error) {
        console.log(error,error);
        res.json({
            error
        })
    }
}
exports.getTakimTakip = async (req, res) => {
    try {
        const {
            id
        } = req.params;
        console.log(req.params,"paramss")
        const result = await Hurda.findById(id)
        res.json({
            success: true,
            result
        })
    } catch (error) {
        res.json({
            error
        })
    }
}

exports.deleteTakimTakip = async (req, res) => {
    try {
        const {
            id
        } = req.params;
        const result = await Hurda.findByIdAndRemove(id)
        res.json({
            success: true,
            result
        })
    } catch (error) {
        res.json({
            success: false,
            message: 'Silinecek bir Takım bulunamadi'
        })
    }
}

exports.updateTakimTakip = async (req, res) => {
    try {
        const updateData = req.body;
        const data = await Hurda.findByIdAndUpdate(req.params.id);
        const log = `Eski Stok :${data.guncelStok} Yeni Stok: ${updateData.guncelStok}, ${new Date().toISOString()},Değişen Kişi : ${req.user.email}`;
        updateData.log.push(log)
        const result = await Hurda.findByIdAndUpdate(req.params.id, updateData);
        res.json({
            result
        })

    } catch (error) {
        res.json({
            error
        })
    }
}

exports.modifyYacht = async (req, res) => {
    try {
      
       const result2 =  [1, 2, [3, 4]].flat(Infinity); // [1, 2, 3, 4]
        const id = req.params.id;
        const insertData = req.body;
        const newCustomer = req.body;
        // const result = await Yacht.findByIdAndUpdate(id,{
        //     $push:insertData
        // })

        // res.json({result})
        const result = await Hurda.findById(id);

        const billion = 1_000;
        console.log(billion);
       
    } catch (error) {

        res.json({error})

    }
}