const http = require("http");

// modul querystring untuk mengubah format query string menjadi object
const querystring = require("querystring");

const server = http.createServer((req, res) => {
  let urlReq, methodReq, dataRequest;

  // pakai const agar tipe datanya tidak diubah
  const chunkArr = [];
  const dataResponse = {};

  res.setHeader("Content-Type", "application/json");

  // dapatkan path dari url
  urlReq = req.url;

  // Jika method tidak disertakan, isi dengan get
  methodReq = req.method ?? "get";

  /**
   *  Kita buat routing ke /login
   *  yang hanya menerima method GET dan POST
   */

  // jika /login diakses
  if (urlReq.toLowerCase() === "/login") {
    // dengan method get
    if (methodReq.toLowerCase() === "get") {
      // berikan respon berisi keterangan halaman login
      dataResponse.data = "ini adalah halaman login";
    } else if (methodReq.toLowerCase() === "post") {
      // selama buffering data body
      req.on("data", (chunk) => {
        // kita tambahkan data chunk ke chunkArr
        chunkArr.push(chunk);
      });
    } else {
      dataResponse.data = "Hanya menerima method GET dan POST";
    }
  } else {
    // jika bukan /login yang diakses, ya beritahu aja
    dataResponse.data = "Gunakan endpoint /login";
  }

  // Setelah data request selesai (end) diterima oleh server
  req.on("end", () => {
    // jika chunkArr berisi data
    if (chunkArr.length !== 0) {
      // proses chunkArr menjadi data asli
      dataRequest = Buffer.concat(chunkArr).toString();

      // tampilkan dataRequest pada console.log
      console.log(dataRequest);
      // perhatikan di console log bahwa dataRequest mengikuti format querystring

      // kita ubah dataRequest menjadi object
      let requestObj = querystring.parse(dataRequest);

      // masukkan requestObj ke dalam dataResponse
      dataResponse.data = requestObj;
    }
    // kemudian kirim ke client
    return res.end(JSON.stringify(dataResponse));
  });

  
});

// set port server
server.listen(3000);