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
router.post('/sign-in',controller.signin)
router.get('/user-list', controller.userList);
router.get('/user-list/:id', controller.userById);
router.delete('/user-delete/:id',controller.userDelete);
router.put('/user-update/:id',controller.userUpdate)
// router.get('/logout', controller.logout)


const port = 5000;
app.use(koaBody({multipart:true}))
app.use(router.routes())
.use(router.allowedMethods());
app.use(cors());
app.listen(port,() =>{
console.log(`${port}`)
})