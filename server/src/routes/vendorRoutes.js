const express = require("express");
const router = express.Router();
const { updateInfo, updatePassword } = require('../controllers/vendor')

router.put('/vendors/:id', updateInfo)
router.put('/vendors/:id', updatePassword)

module.exports = router;