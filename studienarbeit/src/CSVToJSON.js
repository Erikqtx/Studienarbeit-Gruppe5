//require csvtojson module
const CSVToJSON = require('csvtojson');

//convert the-counted-2015.csv file to json array
CSVToJSON().fromFile('./src/Database/thecounted-data/the-counted-2015.csv')
    .then(cases => {

        console.log(cases);


    }).catch(err => {

        console.log(err);

    });