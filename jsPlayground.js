// Javascript Playground //
import {weatherApiKey} from "./apikeys.js";
import {fullName} from "./exporttest.js";
import fetch from "node-fetch";
import fs from "fs";
//const fetch = require('node-fetch');


console.log(fullName)








/* Weather API Test */
/* https://www.weatherapi.com/docs/# */ 
/*

fetch(`http://api.weatherapi.com/v1/forecast.json?key=${weatherApiKey}&q=49635&days=3`)
.then(response => {
    if (!response.ok){throw Error(`Problem fetching data | Error code ${JSON.stringify(response)}`)}
    return response.json()
})
.then(data => {
    console.log(data.forecast.forecastday)
})
.catch(error => console.error(error))
*/








/* Twitter fetch for a specific tweet
fetch("https://api.twitter.com/2/tweets/1475088179237695490?expansions=attachments.media_keys&tweet.fields=created_at,author_id,lang,source,public_metrics,context_annotations,entities", {  
    method: "GET",
    //body: "",
    headers: {
    Authorization: "Bearer AAAAAAAAAAAAAAAAAAAAAHVSWwEAAAAAOn%2FFskPge8QQHXr3bnUS8BvpFQY%3DIL7o0vYJHC3sFQtBHnJqkSVwMoiEBtmJdFRZnrNyuNf0y4RUfF"
  }
})
.then(response => response.json())
.then(data => {
    console.log(JSON.stringify(data))
    //fs.writeFileSync("TweetTest.txt", JSON.stringify(data))
})
.catch(error => {
    console.error(error)
})
*/









// Great example of using recursion to solve a simple dice problem.
// Study this in more detail at a later time.

/*
function rolldiceSumProb(arr, totalSides){
    if (arr<totalSides || arr>totalSides*6) return 0;
    if (totalSides===0) return 1;
    let p = 0;
    for (let i=1; i<=6; i++) p += rolldiceSumProb(arr-i, totalSides-1); 
    return p/6;
}

console.log(rolldiceSumProb(7,2)); 
*/
