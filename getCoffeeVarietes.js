axios = require("axios")
cheerio = require("cheerio")

const url = "https://en.wikipedia.org/wiki/List_of_coffee_varieties"

async function getCoffeeVarietes() {
    const { data } = await axios.get(url)
    const $ = cheerio.load(data)
    const coffeeTable = $('td:contains("Arusha")').parent().parent()

    let coffeeInfos = []
    // console.log(coffeeTable.children().length)
    coffeeTable.find('tr').each((i, el) => {
        if (i == 0)
            return
        const $tr = $(el)
        const coff = {}
        $tr.find('td').each((j, td) => {
            const $td = $(td)
            if (j == 0)
                coff.name = $td.text().trim()
            if (j == 1)
                coff.specie = $td.text().trim()
            if (j == 2)
                coff.region = $td.text().trim()
            if (j == 3)
                coff.comment = $td.text().trim()
        })
        coffeeInfos.push(coff)
    });
    // console.log(coffeeIfos)

    return coffeeInfos
}

module.exports = getCoffeeVarietes;