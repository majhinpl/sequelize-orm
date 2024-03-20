const express = require("express");
const cors = require("cors");
const app = express();

let corsOptions = {
  origin: "http://localhost/8000",
};

// middlewares
app.use(cors(corsOptions));

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

// routers
const router = require("./routes/productRouter.js");

app.use("/api/products", router);

// testing api

app.get("/", (req, res) => {
  res.json({ message: "working fine!!!" });
});

// port
const PORT = process.env.PORT || 8080;

// server

app.listen(PORT, () => {
  console.log(`server is listening at port ${PORT}`);
});
