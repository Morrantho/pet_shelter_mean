import { Component, OnInit } from '@angular/core';
import {PetService} from "../pet.service";
import { Router } from "@angular/router";

@Component({
    selector: 'app-newpet',
    templateUrl: './newpet.component.html',
    styleUrls: ['./newpet.component.css']
})

export class NewpetComponent implements OnInit {
    private pet:any;

    constructor(private petService:PetService, private router:Router ){}

    ngOnInit(){
        this.initPet();
    }

    initPet(){
        this.pet = {};
    }

    create( $event ){
        this.petService.create( this.pet, ( data )=>{
            if(data.errors){
                this.pet.errors = data.errors;
            }else{
                this.router.navigateByUrl("/pets/"+data._id);
            }
        });
        this.initPet();
        $event.preventDefault();
    }
}
