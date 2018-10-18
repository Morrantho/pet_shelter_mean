let express = require("express");
let session = require("express-session");
let bp      = require("body-parser");
let app     = express();

app.use( bp.urlencoded({ extended:true }) );
app.use( express.json() );
app.use( session({ secret:"hideme" }) );

let PORT = 8000;

require("./config/db.js");
require("./config/routes.js")(app);

app.listen( PORT, ()=>{
    console.log("SERVER LISTENING ON PORT: ",PORT);
} );