const getCoffeeVarietes = require("./getCoffeeVarietes")
const getCoffeeDrinks = require("./getCoffeeDrinks")

express = require("express")
cors = require("cors")


const app = express()
app.use(cors())

app.get('/api/coffee-varietes', async (req, res) => {
    coffeeInfos = await getCoffeeVarietes()
    res.json(coffeeInfos)
})

app.get('/api/coffee-drinks', async (req, res) => {
    coffeeInfos = await getCoffeeDrinks()
    res.json(coffeeInfos)
})

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log('listening on port: ' + PORT)
})
