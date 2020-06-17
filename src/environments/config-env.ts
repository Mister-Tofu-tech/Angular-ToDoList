const fs = require('fs');
require('dotenv').config();

console.log(process.env.API_KEY);
const targetPath = `./src/environments/environment.prod.ts`;
const targetPath2 = `./src/environments/environment.ts`;


const writeString = `export const environment = {
    production: false,
    firebase: {
      apiKey: '${process.env.API_KEY}',
      authDomain: '${process.env.AUTHDOMAIN}',
      databaseURL: '${process.env.DATABASEURL}',
      projectId: '${process.env.PROJECTID}',
      storageBucket: '${process.env.STORAGEBUCKET}',
      messagingSenderId: '${process.env.MESSAGINGSENDERID}',
      appId: '${process.env.APPID}',
      measurementId: '${process.env.MEASUREMENTID}'
    }
  };
`;

const writeString2 = `export const environment = {
    production: false,
    firebase: {
      apiKey: '${process.env.API_KEY}',
      authDomain: '${process.env.AUTHDOMAIN}',
      databaseURL: '${process.env.DATABASEURL}',
      projectId: '${process.env.PROJECTID}',
      storageBucket: '${process.env.STORAGEBUCKET}',
      messagingSenderId: '${process.env.MESSAGINGSENDERID}',
      appId: '${process.env.APPID}',
      measurementId: '${process.env.MEASUREMENTID}'
    }
  };
`;
fs.writeFile(targetPath, writeString, function (err) {
    if (err)
         console.log(err);
  });

fs.writeFile(targetPath2, writeString2, function (err) {
if (err)
        console.log(err);
});