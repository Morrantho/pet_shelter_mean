let PetRoutes = require("../routes/PetRoutes.js");
let path = require("path");

module.exports=(app)=>{
    PetRoutes(app);

    app.all("*", (req,res,next) => {
        res.sendFile(path.resolve("../client/dist/client/index.html"));
    })
}