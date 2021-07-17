const Klavuz = require('../model/Klavuz')
exports.getBilenmisTakimListesi = async (req, res) => {

    try {
    
    //    const yachtType = req.query.type == null ? 'normal' :req.query.type;
    //     console.log(yachtType,"type backend");
        const result = await Klavuz.find({});
        res.json({
            success: true,
            result
        })
    } catch (error) {
        console.log(error);
    }
}
exports.createBilenmisTakim = async (req, res) => {
    try {

        const takim = new Klavuz(req.body);
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
exports.getBilenmisTakim = async (req, res) => {
    try {
        const {
            id
        } = req.params;
        console.log(req.params,"paramss")
        const result = await Klavuz.findById(id)
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

exports.deleteBilenmisTakim = async (req, res) => {
    try {
        const {
            id
        } = req.params;
        const result = await Klavuz.findByIdAndRemove(id)
        res.json({
            success: true,
            result
        })
    } catch (error) {
        res.json({
            success: false,
            message: 'Silinecek bir Yacht bulunamadi'
        })
    }
}

exports.updateBilenmisTakim = async (req, res) => {
    try {
        const updateData = req.body;

        const result = await Klavuz.findByIdAndUpdate(req.params.id, updateData);
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
        const result = await Klavuz.findById(id);

        const billion = 1_000;
        console.log(billion);
       
    } catch (error) {

        res.json({error})

    }
}