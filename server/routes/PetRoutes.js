let PetController = require("../controllers/PetController.js");

module.exports=(app)=>{
    app.get("/api/pets",PetController.all);
    app.post("/api/pets",PetController.create);
    app.get("/api/pets/:id",PetController.findById);
    app.patch("/api/pets/:id",PetController.update);
    app.delete("/api/pets/:id",PetController.destroy);
    
    app.patch("/api/pets/:id/like",PetController.like);
}