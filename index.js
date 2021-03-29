var express = require('express');
var app = express();

app.use(express.static('public'))  // serve static files

app.use((_req, res) => res.status(404).send("Sorry, no such page!"));

app.listen(3000, () => console.log('app started on localhost:3000, press Ctrl-C to terminate.'));

/* without a specified route the index.html page in the public folder loads
   that is, if url = 'localhost:3000', then the index.html page loads.
   if url = 'localhost:3000/about.html', then the about page is retrieved and sent to the browser.
   using the nav bar on either page allows navigating to the other page.
   images and style sheet are merged with page html from subfolders of public
   note the nav bar code is repeated on both pages */
