let Pet = require("mongoose").model("Pet");

class PetController{

    create(req,res){
        Pet.findOne({ name: req.body.name }, (e,pet)=>{
            if(pet){
                return res.json({ errors:{ name:{ message:"A pet with this name already exists" } } });
            }else{        
                let pet = new Pet(req.body);

                pet.save(e=>{
                    if(e) return res.json(e);
                    return res.json(pet);
                });
            }
        })

    }

    all(req,res){
        Pet.find({},(e,pets)=>{
            if(!pets) return res.json(e);
            return res.status(200).json(pets);
        })
    }

    findById(req,res){
        Pet.findOne({ _id: req.params.id }, (e,pet)=>{
            if(!pet) return res.status(404).json("Pet not found.");
            return res.status(200).json(pet);
        })
    }

    update(req,res){
        Pet.findOne({ _id: req.params.id }, (e,pet)=>{
            if(!pet) return res.status(404).json("Pet not found");
            pet.name = req.body.name;
            pet.description = req.body.description;
            pet.type = req.body.type;
            pet.likes = req.body.likes;
            pet.skill1 = req.body.skill1;
            pet.skill2 = req.body.skill2;
            pet.skill3 = req.body.skill3;

            pet.save(e=>{
                if(e) return res.json(e);
                return res.status(200).json(pet);
            });
        })
    }

    destroy(req,res){
        Pet.findOne( {_id: req.params.id}, (e,pet)=>{
            if(!pet) return res.status(404).json("Pet not found!");
            Pet.deleteOne( { _id: req.params.id }, (e)=>{
                if(e) return res.status(500).json(e);
                return res.json(pet);
            } )
        } )
    }

    like(req,res){
        Pet.findOne( {_id: req.params.id}, (e,pet)=>{
            if(!pet) return res.status(404).json("Pet not found!");
            
            pet.likes++;

            pet.save(e=>{
                if(e) return res.status(400).json(e);
                return res.status(200).json(pet);
            });
        } )
    }
}

module.exports = new PetController();