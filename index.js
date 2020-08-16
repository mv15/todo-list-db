const express = require('express');
const app = express();
const port = 8000;
const expressLayouts = require('express-ejs-layouts');
const db = require('./config/mongoose');


// serving static files
app.use(express.static('./assets'));

app.use(expressLayouts);

// extract style and scripts from sub pages into the layout
// static files for pages
app.set('layout extractStyles', true);
app.set('layout extractScripts', true);

// for parsing post request data
app.use(express.urlencoded());

// use express router
// for all request route to index.js in routes
app.use('/', require('./routes')); // it by default fetches index so no need to mention index

// set up the view engine
app.set('view engine', 'ejs');
app.set('views', './views');


app.listen(port, function(err) {
    if(err)
    {
        console.log(`Error in running the server ${err}`);
        return;
    }

    console.log(`Server is running at port ${port}`);
});