const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

app.listen(2000, () => {
  console.log(`Server listening on port 2000!`);
});
