const router = require('express').Router()
const ctrl = require('../controllers')

const authRequired = require('../middleware/authRequired')

//routes
router.post('/user/',ctrl.user.create)
router.get('/user/id',ctrl.user.show)
router.put('/user/:id',ctrl.user.update)
router.delete('/user/:id',ctrl.user.destroy)

//exports
module.exports = router