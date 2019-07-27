const next = require("next");
const http = require("http");
const url = require("url");
const path = require("path");
const express = require( 'express' );

const port = process.env.PORT || 3000;
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {

  const server = express();

  server.get('/story/:slug', (req, res) => {
    const id = parseInt(req.params.slug.split('-').pop());
    const queryParams = { id: id };
    app.render( req, res, '/story', queryParams);
  })

  server.get( '*', ( req, res ) => {
    return handle( req, res );
  } );


 server.listen(port, () => {
      console.log(`Listening on PORT ${port}`);
    });
});
