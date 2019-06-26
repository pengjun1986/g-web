const Router = require('koa-router')
const router = new Router()
const user = require('./controller/user')

router.post('/user/login', user.login)
router.get('/user/profile', user.profile)
router.get('/user/list', user.list)
router.get('/user/page', user.page)
router.get('/user/test', user.test)

module.exports = router