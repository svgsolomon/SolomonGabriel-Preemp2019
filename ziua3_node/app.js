const express = require("express");
const http = require("http");
const router = express.Router();
const app = express();

router.get("/users", (req, res) => {
  res.status(200).json({ name: "Solomon", email: "solomon@example.com" });
});
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use("/", router);
const server = http.createServer(app);
server.listen(5000);
