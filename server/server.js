
const express = require("express");
const cors = require("cors");
const configDatabase = require("./configurations/database.js");
const bodyParser = require('body-parser');
const guess = require("./routes/high.routes.js");
const dotenv = require("dotenv");

dotenv.config();

const app = express();

const PORT = process.env.PORT || 5000;
app.use(bodyParser.json());
//connecting to the mongodb database
configDatabase();

app.use(cors({ origin: true, credentials: true }));

// routers
app.use("/guess", guess);



// listen
app.listen(PORT, () =>
  console.log(`Server is running on http://localhost:${PORT}`)
);
