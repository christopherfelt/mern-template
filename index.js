require("dotenv").config();
require = require("esm")(module); //not quite sure what the purpose of this is
module.exports = require("./server/main");
