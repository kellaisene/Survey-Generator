const express = require('express');
const bodyParser = require('body-parser');
// const session = require('express-session');
// const connectionString = process.env.CONNECTION_STRING;

const app = express();
// const massive = require('massive');


app.use( bodyParser.json() );
// app.use( session({
//   secret: '@nyth!ng y0u w@nT',
//   resave: false,
//   saveUninitialized: false
// }));

// massive(connectionString).then((db) => {
//     app.set('db', db);
// })

const port = 8080;
app.listen( port, () => { console.log(`Server listening on port ${port}.`); 
} );