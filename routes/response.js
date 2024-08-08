// 设置响应数据
import express from 'express'
import path from 'path'

const router = express.Router()

router.get('/response/json', (req, res) => {
    // 发送 JSON 数据
    res.json({
        name: 'express',
        type: 'framework'
    })
})
router.get('/response/send', (req, res) => {
    // html
    res.send('<h1>hello express</h1>')
})
router.get('/response/download',(req,res) => {
    // 用于下载文件
    res.download(path.resolve('./package.json'))// 指定下载路径
})

export default router