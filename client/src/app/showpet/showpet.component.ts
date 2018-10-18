import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from "@angular/router";
import { PetService } from "../pet.service";

@Component({
    selector: 'app-showpet',
    templateUrl: './showpet.component.html',
    styleUrls: ['./showpet.component.css']
})

export class ShowpetComponent implements OnInit {
    private pet:any;
    private liked = false;

    constructor( private route:ActivatedRoute, private petService:PetService, private router:Router ){}

    ngOnInit(){
        this.route.params.subscribe( params => {
            this.petService.findById( params.id, (data)=>{
                if(!data || data.errors){
                    
                }else{
                    this.pet = data;
                }
            } )
        } );
    }

    like(){
        this.petService.like(this.pet._id,(data)=>{
            this.pet = data;
            this.liked = true;
        });
    }

    delete(){
        this.petService.destroy( this.pet._id, (data)=>{
            if(data.errors){
                this.pet.errors = data.errors;
            }else{
                this.router.navigateByUrl("/pets");
            }
        } );
    }
}
