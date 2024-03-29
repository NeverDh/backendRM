const app = require("./app");
require("dotenv").config();
//const fs = require("fs");
const http = require("http");
//const https = require("https");


const PORT = process.env.PORT || 5000;


// https.createServer({
// 	key: fs.readFileSync(process.env.KEY),
// 	cert: fs.readFileSync(process.env.CERT),
// 	ca: fs.readFileSync(process.env.CA)
// }, app).listen(PORT, () => {
// 	console.log(`app listening on port ${PORT}`);
// });


http.createServer({
}, app).listen(PORT, () => {
	console.log(`app listening on port ${PORT}`);
});