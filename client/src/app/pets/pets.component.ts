import { Component, OnInit } from '@angular/core';
import { PetService } from "../pet.service";

@Component({
    selector: 'app-pets',
    templateUrl: './pets.component.html',
    styleUrls: ['./pets.component.css']
})

export class PetsComponent implements OnInit {
    private pets:any;

    constructor( private petService:PetService ){

    }

    ngOnInit(){
        this.petService.all( (data) => {
            let arr = [];
            for(let thing in data) arr.push(data[thing]);
            this.pets = arr.sort( (a,b)=> a.type.localeCompare( b.type ) );
        });
    }
}
