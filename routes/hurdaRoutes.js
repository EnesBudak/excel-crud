const express = require('express');
const router = express.Router();
const hurdaController = require('../controller/hurdaController')


router.route('/').get(hurdaController.getTakimTakipListesi).post(hurdaController.createTakimTakipListesi)



router.route('/:id').get(hurdaController.getTakimTakip)
.delete(hurdaController.deleteTakimTakip)
.patch(hurdaController.updateTakimTakip)
.put(hurdaController.modifyYacht)



module.exports = router;