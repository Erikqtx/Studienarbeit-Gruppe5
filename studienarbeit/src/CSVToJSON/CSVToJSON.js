//require csvtojson module

const CSVToJSON = require("csvtojson");
const fs = require("fs");

//convert the-counted-2015.csv file to json array

CSVToJSON()
  .fromFile("./Database/thecounted-data/the-counted-2015.csv")
  .then((cases) => {
    console.log(cases);

    //write JSON Array to a file
    fs.writeFile(
      "./Database/json files/2015.json",
      JSON.stringify(cases, null, 4),
      (err) => {
        if (err) {
          throw err;
        }
        console.log("JSON is saved.");
      }
    );
  })
  .catch((err) => {
    console.log(err);
  });

//convert the-counted-2016.csv file to json array

CSVToJSON()
  .fromFile("./Database/thecounted-data/the-counted-2016.csv")
  .then((cases) => {
    console.log(cases);

    //write JSON Array to a file
    fs.writeFile(
      "./Database/json files/2016.json",
      JSON.stringify(cases, null, 4),
      (err) => {
        if (err) {
          throw err;
        }
        console.log("JSON is saved.");
      }
    );
  })
  .catch((err) => {
    console.log(err);
  });
