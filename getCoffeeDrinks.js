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
    let dlParts = 0
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


            if ($(el).parent().nextUntil('dl').length < $(el).parent().nextUntil('h3').length
                && $(el).parent().nextUntil('dl').length < $(el).parent().nextUntil('h2').length) {

                dlParts++
                let dlChecker = 1
                console.log($(el).text(), 'this part is dled')
                $('dl').each((i, myDl) => {
                    if (dlParts == dlChecker) {
                        coffeeInfos[catIndex].drinks.push({
                            name: $(myDl).text()
                        })
                    }
                    if ($(myDl).nextUntil("h2").length < $(myDl).nextUntil("dl").length) {

                        console.log('_______________next part')
                        dlChecker++
                    }
                })
            }


        }
        if ($(el).parent().prop("nodeName") == "H3") {
            const drink = {
                name: $(el).text().trim()
            }
            coffeeInfos[catIndex].drinks.push(drink)
        }
    });




    return coffeeInfos
}

module.exports = getCoffeeDrinks;