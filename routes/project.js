//imports
const router = require('express').Router()
const ctrl = require('../controllers')

//routes
router.get('/projects',ctrl.project.index);
router.post('/projects',ctrl.project.create);
router.get('/project/:id',ctrl.project.show)
router.put('/project/:id',ctrl.project.update)
router.delete('/project/:id',ctrl.project.delete)

//exports
module.exports = router;