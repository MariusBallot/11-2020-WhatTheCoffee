# What The Coffee 🥄
A simple API that returns different coffee informations

## End points
Hosted on http://what-the-coffee.herokuapp.com
```
/api/coffee-varietes
/api/coffee-drinks
```


## Details
This api was made by dynamicly scraping those wikipedia page
* https://en.wikipedia.org/wiki/List_of_coffee_varieties
* https://en.wikipedia.org/wiki/List_of_coffee_drinks

The tools used were
* https://www.npmjs.com/package/cheerio
* https://www.npmjs.com/package/express

Then deployed using heroku to http://what-the-coffee.herokuapp.com/

### TODO
*   [x] Scrape Wikipedia
*   [x] Sort information
*   [x] Getter functions
    *   [x] Get Coffee Regions
    *   [x] Get Coffee Names
    *   [x] Get Coffee Varietes
    *   [x] Get Coffee Drinks
    *   [ ] add articles to coffee drinks
*   [ ] APIfy
    *   [x] express APP
    *   [x] nodemon
    *   [x] Cors fixing
    *   [x] Deploy heroku
