import { Component,OnInit } from '@angular/core';
import {GithubService} from '../services/github.service';
import {Router, ActivatedRoute} from '@angular/router';

@Component({
    moduleId: module.id,
    selector: 'profile',
    templateUrl: 'profile.component.html'
})

export class ProfileComponent { 
    user:any[];
    repos:any[];
    //username:string;

    constructor(private _githubService: GithubService,private _route:ActivatedRoute){
        
    }

    ngOnInit(){
        this._route.params
            .map(params => params['name'])
                .subscribe((name) => {
                    this._githubService.getUser(name).subscribe(user => {
                        this.user = user;
                    })
                },error=> {
                    this.user=[];
                    console.log('No username found')
                });
        
         this._route.params
            .map(params => params['name'])
                .subscribe((name) => {
                    this._githubService.getRepos(name).subscribe(repos => {
                        this.repos = repos;
                    });
                },error=>{
                    this.repos=[];
                    console.log("No repos found");
                });

    }
    
    
}
