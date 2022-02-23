const http = require("http");

const server = http.createServer((req, res) => {
    let url, method, dataResponse

    res.setHeader("Content-Type", "application/json")
    url = req.url;

    method = req.method?? "get" //ambil methodnya jika tidak ada maka diubah menjadi get

    if(url === "/"){
        dataResponse = {
            data: "ini adalah halaman HomePage"
        };
    } else if(url.toLowerCase() == "/login"){
        if(method.toLowerCase() === "post"){
            dataResponse = {
                data : "Anda Login dengan Method POST"
            };
        } else {
            dataResponse = {
                data: "Anda di get"
            };
        } 
    } else {
        dataResponse = {
            data : "404, maaf halaman yang anda cari tidak ditemukan"
        };
    }

    return res.end(JSON.stringify(dataResponse));

});

server.listen(8000);