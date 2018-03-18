import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable()
export class UserService {
    //Shared Attribute
    userName: string;

    //Initialized Date
    constructor(private http: HttpClient){
        http.get("https://jsonplaceholder.typicode.com/users/1")
        .subscribe(response => {
            this.userName = response['name'];
            console.log('Response: ',JSON.stringify(response));
        });
    }

    //Shared Method
    changeUserName(userName: string): void{
        this.userName = userName;
    }
}