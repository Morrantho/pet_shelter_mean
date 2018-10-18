let PetRoutes = require("../routes/PetRoutes.js");

module.exports=(app)=>{
    PetRoutes(app);

    app.all("*", (req,res,next) => {
        res.sendFile(path.resolve("../client/dist/client/index.html"));
    })
}