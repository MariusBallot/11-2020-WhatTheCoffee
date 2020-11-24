# What The Coffee 🥄
A simple API that returns different coffee informations.

## End points
Hosted on http://what-the-coffee.herokuapp.com
```
/api/coffee-varietes
/api/coffee-drinks
```


## Details
This api was made by dynamically scraping those wikipedia pages:
* https://en.wikipedia.org/wiki/List_of_coffee_varieties
* https://en.wikipedia.org/wiki/List_of_coffee_drinks

Tools:
* https://www.npmjs.com/package/cheerio
* https://www.npmjs.com/package/express

Then deployed using Heroku to http://what-the-coffee.herokuapp.com/

### TODO
*   [x] Scrape Wikipedia
*   [x] Sort information
*   [x] Getter functions
    *   [x] Get Coffee Regions
    *   [x] Get Coffee Names
    *   [x] Get Coffee Varietes
    *   [x] Get Coffee Drinks
    *   [ ] Add articles to coffee drinks
*   [x] APIfy
    *   [x] Express APP
    *   [x] Nodemon
    *   [x] Cors fixing
    *   [x] Deploy heroku
