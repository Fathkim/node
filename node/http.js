/**
 * module : HTTP
 * 
 * cara membuat srver sederhana dengan module http
 * 
 */

// import module http

const http = require("http");

const server = http.createServer((req, res)=>{
    //Inisialisasi Variable yang digunakan 

    let data;
    //panggil request
    console.log(req);

    /**menampilkan sebuah objek dari data
     * data objek request yang sering digunakan itu ada url method headers
     * 
    */
    
    data = {
        url: req.url,
        method: req.method,
        header: req.headers,
    };

    //set header menjadi json
    res.setHeader("Content-Type", "application/json")

    // console.log(data)

    res.end(JSON.stringify(data))

});

server.listen(5000)
