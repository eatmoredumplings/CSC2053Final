const express = require("express");
const router = express.Router();
const { getVouchers, addVoucher, deleteVoucher, editVoucher } = require('../controllers/voucher')

router.get('/vouchers', getVouchers)
router.post('/voucher', addVoucher)
router.delete('/voucher/:id', deleteVoucher)
router.patch('/voucher/:id', editVoucher)

module.exports = router;
