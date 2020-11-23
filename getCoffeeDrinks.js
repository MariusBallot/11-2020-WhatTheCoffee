axios = require("axios")
cheerio = require("cheerio")

const url = "https://en.wikipedia.org/wiki/List_of_coffee_drinks"

function dlPartVerifier() {

}

async function getCoffeeDrinks() {
    const { data } = await axios.get(url)
    const $ = cheerio.load(data)

    let coffeeInfos = []
    let catIndex = -1
    $('.mw-headline').each((i, el) => {
        if (i >= $('.mw-headline').length - 4)
            return
        if ($(el).parent().prop("nodeName") == "H2") {
            const cat = {
                category: $(el).text(),
                drinks: []
            }
            coffeeInfos.push(cat)
            catIndex++

        }
        if ($(el).parent().prop("nodeName") == "H3") {
            const drink = {
                name: $(el).text().trim()
            }
            coffeeInfos[catIndex].drinks.push(drink)
        }
    });


    $('dl').each((i, el) => {

    })

    return coffeeInfos
}

module.exports = getCoffeeDrinks;