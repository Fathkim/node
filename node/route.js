//Basic

const http = require("http")
const server = http.createServer((req, res)=>{
    let url, dataResponse

    res.setHeader("Content-Type", "application/json");

    url = req.url;

    /**
     * membuat routing yang dibutuhkan sesuai client
     * homepage, login 404 not found 
     */

    if(url === "/"){
        dataResponse = {
            data : "Ini adalah halaman homepage"
        };
    } else if (url.toLowerCase() === "/register") {
        dataResponse = {
            data : "Ini adalah halaman register"
        }
    } else if (url.toLowerCase() === "/login") {
        dataResponse = {
            data : "Ini adalah halaman login"
        }
    } else {
        dataResponse = {
            data : "404, maaf halaman yang anda cari tidak ditemukan"
        }
    }
    return res.end(JSON.stringify(dataResponse))

});
server.listen(8000)