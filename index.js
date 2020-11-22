const getCoffee = require("./getCoffee")

express = require("express")
cors = require("cors")


const app = express()
app.use(cors())

app.get('/api/coffee', async (req, res) => {
    coffeeInfos = await getCoffee()
    res.json(coffeeInfos)
})


const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log('listening on port: ' + PORT)
})
