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

            let partType = "H3"

            let currEl = $(el).parent().next()
            for (let i = 0; i < 300; i++) {
                if (currEl.prop("nodeName") == "H2") {
                    break
                }

                if (currEl.prop("nodeName") == "DL") {
                    partType = "DL"

                    break
                }

                currEl = currEl.next()
            }

            if (partType == "DL") {

                $('dl').each((i, el) => {

                    let nextPart = false

                    let currEl = $(el)

                    console.log(currEl.text())
                    const drink = {
                        name = currEl.text()
                    }
                    coffeeInfos[catIndex].drinks.push(drink)

                    for (let i = 0; i < 100; i++) {
                        // if (currEl.prop('nodeName') == "DL") {
                        //     // console.log(currEl.text())
                        //     // break
                        // }
                        // if (currEl.prop('nodeName') == "H2") {
                        //     console.log("next new part")
                        //     break
                        // }
                        currEl = currEl.next()
                    }
                });
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