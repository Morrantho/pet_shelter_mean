import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
    providedIn: 'root'
})

export class PetService {
    
    constructor( private http:HttpClient ){

    }

    all(cb){
        this.http.get("/api/pets")
        .subscribe( data => cb(data) );
    }

    findById(id,cb){
        this.http.get("/api/pets/"+id)
        .subscribe( data => cb(data) );        
    }

    create(data,cb){
        this.http.post("/api/pets",data)
        .subscribe( data => cb(data) );
    }

    update(pet,cb){
        this.http.patch("/api/pets/"+pet._id,pet)
        .subscribe( data => cb(data) );        
    }

    destroy(id,cb){
        this.http.delete("/api/pets/"+id)
        .subscribe( data => cb( data ) )
    }

    like(id,cb){
        this.http.patch("/api/pets/"+id+"/like",{})
        .subscribe( data => cb(data) );
    }
}
