const mountMethodDemo = (app) => {
    app.get('/method/get', (req, res) => {
        res.send('GET request')
    })
    app.post('/method/post', (req, res) => {
        res.send('POST request')
    })
    app.put('/method/put', (req, res) => {
        res.send('PUT request')
    })
    app.delete('/method/delete', (req, res) => {
        res.send('DELETE request')
    })
    // 匹配所有的请求方法。
    /* app.all('/method/all', (req, res) => {
        const { method } = req
        res.send(`${method} request`)
    }) */
}

export default mountMethodDemo