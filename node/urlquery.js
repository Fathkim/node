/**
 * URL Query String
 * 
 * contoh:
 * URL dari sekedar https://www.google.com
 * Kemudian kita masukan keyword Indonesia di kolom pencarian google 
 * Tetiba URLnya menjadi https://www.google.com/search7q=Indonesia 
 * 
 * q = key
 * Indonesia = Value 
 * 
 * digunakan untuk mengirim data ke server dengan method GET
 * 
 */

const http = require("http");
const url = require("url") //import modul query string
const querystring = require("querystring") //import modul query string

const server = http.createServer((req, res) => {

let urlRequest, //berisi patih yang terdapat di request
    urlObj, //berisi url yang telah diproses
    urlQuery, //object dari Query 
    urlResponse //object dari query yang ada di parsing 

    
res.setHeader("Content-Type", "application/json");

    urlRequest = req.url;

//convert urlRequest menjadi object
urlObj = url.parse(urlRequest);
console.log(urlObj)

//ambil property yang terdapat di object url
urlQuery = urlObj.query;

if(!urlQuery){
    dataResponse = {
        data: "Query tidak ditemukan"
    };
    return res.end(JSON.stringify(dataResponse));
}
dataResponse = querystring.parse(urlQuery);
return res.end(JSON.stringify(dataResponse));

});

server.listen(9000);