const getFlagValue = require("./arquivo2");

console.log(`Oi ${getFlagValue("--name")}. ${getFlagValue("--greeting")}.`);