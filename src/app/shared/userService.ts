import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response, RequestMethod, Request } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map'

import { AuthenticationService } from '../shared/authenticationService';
import { User } from '../models/user';

@Injectable()
export class UserService {
    constructor(
        private http: Http,
        private authenticationService: AuthenticationService) {
    }

    createAuthorizationHeader(headers: Headers) {
        headers.append('x-auth-token', this.authenticationService.token);
    }

    getUsers(): Observable<User[]> {
        // let headers = new Headers({ 'x-auth-token': this.authenticationService.token });
        // let options = new RequestOptions({ method: "get", headers: headers });

        //let headers = new Headers();
        // this.createAuthorizationHeader(headers);
        // return this.http.get('http://localhost:8081/api/users/find', {
        //     headers: headers
        // }).map((response: Response) => response.json());

        // return this.http.get('http://localhost:8081/api/users/find', { headers: headers })
        //     .map((response: Response) => response.json());

        //let headers = new Headers({'x-auth-token': this.authenticationService.token });

        let headers = new Headers({ 'x-auth-token': this.authenticationService.token });
        let options = new RequestOptions({  headers: headers });

        // let options = new RequestOptions({
        //     method: RequestMethod.Get,
        //     headers: headers
        // });
        return this.http.get('http://localhost:8081/api/users/find', options)
            .map((response: Response) => response.json());

    }
}