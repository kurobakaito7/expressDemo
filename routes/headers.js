import express from 'express'

const router = express.Router()
// 获取请求头
router.get('/response/get/header', (req, res) => {
    // 通过 req.headers 即可获取到请求头。
    res.json(req.headers)
})

// 设置响应头
router.get('/response/set/header', (req, res) => {
    res.set('Content-Type', 'text/html')
    res.set('token', '123456')
    res.send('<h1>hello express</h1>')
})

export default router