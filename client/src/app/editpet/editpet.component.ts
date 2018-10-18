import { Component, OnInit } from '@angular/core';
import {PetService} from "../pet.service";
import {ActivatedRoute,Router} from "@angular/router";

@Component({
    selector: 'app-editpet',
    templateUrl: './editpet.component.html',
    styleUrls: ['./editpet.component.css']
})

export class EditpetComponent implements OnInit {
    private pet:any;

    constructor( private petService:PetService, private aR:ActivatedRoute, private router:Router ){}

    ngOnInit(){
        this.aR.params.subscribe( params => {
            this.petService.findById( params.id , ( data )=>{
                if(data.errors){
                    this.pet.errors = data.errors;
                }else{
                    this.pet = data;
                }
            } );
        } );
    }

    edit( $event ){

        this.petService.update(this.pet,(data)=>{
            if(data.errors){
                this.pet.errors = data.errors;
            }else{
                this.router.navigateByUrl("/pets/"+data._id);
            }
        });

        $event.preventDefault();
    }
}
