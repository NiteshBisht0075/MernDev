const koa = require('koa')
const app = new koa();
const Router =require('koa-router')
const router = new Router();
const cors = require('@koa/cors')

const koaBody =require('koa-body')
const dotenv = require('dotenv')
dotenv.config({path:'./.env'})
require('./database/conn')
const controller = require('./controller/userController')

router.post('/register',controller.register)
router.post('/signin',controller.signin)
router.get('/userList', controller.userList);
router.delete('/userDelete/:id',controller.userDelete);
// router.get('/logout', controller.logout)


const port = 5000;

// router.post('/data-add',controller.data)
// module.exports = router.routes()

app.use(koaBody({multipart:true}))
app.use(router.routes())
.use(router.allowedMethods());
app.use(cors());
app.listen(port,() =>{
console.log(`${port}`)
})