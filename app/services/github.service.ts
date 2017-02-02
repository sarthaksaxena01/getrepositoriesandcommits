import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GithubService{
    
    private client_id = '0fafb232217d38ee7475';
    private client_secret = 'c4c55446d2d3c4c685d372095acbabe3c10fa500';
    
    constructor(private _http: Http){
        console.log('Github Service Ready...');
        
    }
    
    getUser(str:string){
        return this._http.get('http://api.github.com/users/'+str+'?client_id='+this.client_id+'&client_secret='+this.client_secret)
            .map(res => res.json());
    }

    getRepos(str:string){
          return this._http.get('http://api.github.com/users/'+str+'/repos?client_id='+this.client_id+'&client_secret='+this.client_secret)
            .map(res => res.json());
    }
}