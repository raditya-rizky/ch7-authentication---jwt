const express = require("express");
const app = express();
const passport = require("./lib/passport");
const router = require("./router");
const { PORT = 8000 } = process.env;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(passport.initialize());

app.use(router);

app.listen(PORT, () => {
  console.log(`Server nyala di port ${PORT}`);
});
