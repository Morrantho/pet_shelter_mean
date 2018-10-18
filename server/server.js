let express = require("express");
let session = require("express-session");
let bp      = require("body-parser");
let app     = express();
let PORT = 8000;
let clientDir = __dirname.substring(0,__dirname.length-6)+"client";

app.use( bp.urlencoded({ extended:true }) );
app.use( express.json() );
app.use( session({ secret:"hideme" }) );
app.use(express.static( clientDir+'/dist/client' ));

require("./config/db.js");
require("./config/routes.js")(app);

app.listen( PORT, ()=>{
    console.log("SERVER LISTENING ON PORT: ",PORT);
} );