const TakimTakipListesi = require('../model/TakimListesi')
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
        else if(req.body.type == 'Bilenecek'){
            const takim = new TakimTakipListesi(req.body);
            const bilenecekTakim = new BilenecekTakim(req.body);
                           await bilenecekTakim.save();
            const result = await takim.save()
            res.json({
                msg:"Bilenecek olarakta eklendi!",
                success: true,
                result
            })
        }else{
            const takim = new TakimTakipListesi(req.body);
            const result = await takim.save()
            res.json({
                msg:"OGK olarak sadece takım takip listesine eklendi!",
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
        console.log(updateData);
        const data = await TakimTakipListesi.findById(req.params.id);
        if(updateData.type == "Hurda"){
            console.log("calisti",updateData);
          const hurda =   await new Hurda({
                guncelStok:data.guncelStok,
                parcaNo:data.parcaNo,
                seriNo:data.seriNo,
                stoktaKalan:data.stoktaKalan,
                takimCinsi:data.takimCinsi,
                talepAdeti:data.talepAdeti,
                talepEden:data.talepEden,
                talepTarihi:data.talepTarihi,
                teslimAdeti:data.teslimAdeti,
                teslimTarihi:data.teslimTarihi,
                toplamAdet:data.toplamAdet,
                type:data.type

            })
            await hurda.save()
            // await Hurda.findOneAndUpdate({
            //     tanim:data.tanim
            // },{
            //     guncelStok:data.guncelStok,
            //     parcaNo:data.parcaNo,
            //     seriNo:data.seriNo,
            //     stoktaKalan:data.stoktaKalan,
            //     takimCinsi:data.takimCinsi,
            //     talepAdeti:data.talepAdeti,
            //     talepEden:data.talepEden,
            //     talepTarihi:data.talepTarihi,
            //     teslimAdeti:data.teslimAdeti,
            //     teslimTarihi:data.teslimTarihi,
            //     toplamAdet:data.toplamAdet,
            //     type:data.type
            // })
        }
        if(updateData.type == "Bilenecek"){
          const bilenecek =   await new BilenecekTakim({
                guncelStok:data.guncelStok,
                parcaNo:data.parcaNo,
                seriNo:data.seriNo,
                stoktaKalan:data.stoktaKalan,
                takimCinsi:data.takimCinsi,
                talepAdeti:data.talepAdeti,
                talepEden:data.talepEden,
                talepTarihi:data.talepTarihi,
                teslimAdeti:data.teslimAdeti,
                teslimTarihi:data.teslimTarihi,
                toplamAdet:data.toplamAdet,
                type:data.type
            })
            await bilenecek.save()
            // await BilenecekTakim.findOneAndUpdate({
            //     tanim:data.tanim
            // },{
            //     guncelStok:data.guncelStok,
            //     parcaNo:data.parcaNo,
            //     seriNo:data.seriNo,
            //     stoktaKalan:data.stoktaKalan,
            //     takimCinsi:data.takimCinsi,
            //     talepAdeti:data.talepAdeti,
            //     talepEden:data.talepEden,
            //     talepTarihi:data.talepTarihi,
            //     teslimAdeti:data.teslimAdeti,
            //     teslimTarihi:data.teslimTarihi,
            //     toplamAdet:data.toplamAdet,
            //     type:data.type
            // }) 
        }
        const log = `Eski Stok :${data.guncelStok} Yeni Stok: ${updateData.guncelStok}, ${new Date().toISOString()},Değişen Kişi : ${req.user.email},Talep Eden:${updateData.talepEden}`;
        if(updateData.log){

            updateData.log.push(log)
        }
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