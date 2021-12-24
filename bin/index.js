#! /usr/bin/env node

const fs = require("fs");
const { parseInsomniaCollection } = require('./insomniaParser.js');

const inputFileName = process.argv.length > 2 ? process.argv[2] : undefined;
if (inputFileName === undefined) {
    console.error("Error: Input file not provided!!! Exiting.");
    process.exit(1);
}


const data = fs.readFileSync(inputFileName, "utf-8");
const newData = parseInsomniaCollection(data);
fs.writeFileSync(inputFileName.slice(0, -5) + ".postman_collection.json", JSON.stringify(newData, null, 2));