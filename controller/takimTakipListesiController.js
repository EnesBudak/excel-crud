const TakimTakipListesi = require('../model/TakimTakipListesi')
const Hurda = require('../model/Hurda')
const BilenecekTakim = require('../model/BilenecekTakim')

exports.getTakimTakipListesi = async (req, res) => {

    try {
    
    //    const yachtType = req.query.type == null ? 'normal' :req.query.type;
    //     console.log(yachtType,"type backend");
   
        const result = await TakimTakipListesi.find({});
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
        if(req.body.type == 'Hurda'){
            const takim = new TakimTakipListesi(req.body);
            const hurda = new Hurda(req.body);
                           await hurda.save();
            const result = await takim.save()
            res.json({
                success: true,
                msg:"Hurda olarakta eklendi!",
                result
            })
           
        }
        else{
            const takim = new TakimTakipListesi(req.body);
            const bilenecekTakim = new BilenecekTakim(req.body);
                           await bilenecekTakim.save();
            const result = await takim.save()
            res.json({
                success: true,
                result
            })
        }
       
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
        const result = await TakimTakipListesi.findById(id)
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
        const result = await TakimTakipListesi.findByIdAndRemove(id)
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
        const data = await TakimTakipListesi.findById(req.params.id);
        if(data.type == "Hurda"){
            await Hurda.findOneAndUpdate({
                tanim:data.tanim
            },updateData)
        }
        else{
            await BilenecekTakim.findOneAndUpdate({
                tanim:data.tanim
            },updateData) 
        }
        const log = `Eski Stok :${data.guncelStok} Yeni Stok: ${updateData.guncelStok}, ${new Date().toISOString()},Değişen Kişi : ${req.user.email}`;
      
        updateData.log.push(log)
        const result = await TakimTakipListesi.findByIdAndUpdate(req.params.id, updateData);
        res.json({
            result
        })

    } catch (error) {
        console.log(error,"error");
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
        const result = await Yacht.findById(id);

        const billion = 1_000;
        console.log(billion);
       
    } catch (error) {

        res.json({error})

    }
}