axios = require("axios")

const url = "https://en.wikipedia.org/wiki/List_of_coffee_varieties"

async function getCoffe() {
    const { data } = await axios.get(url)
    console.log(data)
}

getCoffe()