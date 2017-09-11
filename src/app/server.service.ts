import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

@Injectable()
export class ServerService {
    constructor(private http: Http) {  }

    storeServers(servers: any[]){
        const header = new Headers({
            'ContentType': 'application/json'            
        })
        return this.http.post('https://http-angular-project.firebaseio.com/data.json',
         servers,
         {headers: header });
    }

    getServers(){
        return this.http.get('https://http-angular-project.firebaseio.com/data.json');
    }
}