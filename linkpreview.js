var cheerio = require('cheerio');
var request = require('request');
    
var url = "https://www.naver.com/"

var getData = request(url, function(error, response, html){
        if (error) {throw error};
            
        var $ = cheerio.load(html);
        var objOg = {};
        var ogTitle =  $("meta[property^=og:title]").attr("content");
        var ogUrl =  $("meta[property^=og:url]").attr("content");
        var ogImage =  $("meta[property^=og:image]").attr("content");
        var ogDescription =  $("meta[property^=og:description]").attr("content");
            
        objOg.ogTitle = ogTitle;
        objOg.ogUrl = ogUrl;
        objOg.ogImage = ogImage;
        objOg.ogDescription = ogDescription;

        //console.log(objOg)
    return objOg;
});

console.log(getData);



