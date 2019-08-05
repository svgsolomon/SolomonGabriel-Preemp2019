const http = require("http");
const fs = require("fs");
http
  .createServer((req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    function showContent(type, link) {
      res.writeHead(200, { "Content-Type": type });
      const html = fs.readFileSync(__dirname + link);
      return res.end(html);
    }
    function showFirstTen(type, link) {
      res.writeHead(200, { "Content-Type": type });
      const html = fs.readFile(__dirname + link, (err, data) => {
        if (err) throw err;
        const getJSON = JSON.parse(data);
        const firstTen = getJSON.slice(1, 10);
        const firstTenString = JSON.stringify(firstTen);
        return res.end(firstTenString);
      });
    }
    const prod = new RegExp("(/)(products)(/)([0-9A-Z-]+)(/)?");
    const cat = new RegExp("(/)categories$");
    if (cat.test(req.url)) {
      showContent("application/json", "/categories.json");
      return;
    } else if (prod.test(req.url)) {
      showFirstTen("application/json", "/products.json");
      return;
    } else if (req.url === "/") {
      showContent("text/html", "/main.html");
      return;
    }
    res.end("Wrong url");
  })
  .listen(5000, "127.0.0.1");

//   const cat = new RegExp('/categories')
//   if(cat.test(req.url)){}
