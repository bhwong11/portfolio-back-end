//imports
const router = require('express').Router()
const ctrl = require('../controllers')

//routes
router.get('/',ctrl.project.index);
router.post('/',ctrl.project.create);
router.get('/:id',ctrl.project.show)
router.put('/:id',ctrl.project.update)
router.delete('/:id',ctrl.project.delete)

//exports
module.exports = router;