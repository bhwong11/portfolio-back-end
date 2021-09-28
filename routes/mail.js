//imports
const router = require('express').Router()
const ctrl = require('../controllers')

//routes
router.post('/send',ctrl.mail.send);

//exports
module.exports = router;