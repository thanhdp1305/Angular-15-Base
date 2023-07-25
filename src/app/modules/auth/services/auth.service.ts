import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { Api } from '../../shared/networks/api';
import jwt_decode from 'jwt-decode';
import { ServiceEnum } from '../../shared/configs/enums';

const LOGIN_OAUTH = ServiceEnum.AUTH + '/oauth/token';

@Injectable()
export class AuthService {

    public static instance: AuthService;

    constructor(
        private router: Router,
        private api: Api,
        ) {
            if (!AuthService.instance) {
                AuthService.instance = this;
            }
            return AuthService.instance;
        }

    /**
     * API Login
     * @param data 
     */
    login(data: string) {
        return this.api.post(LOGIN_OAUTH, data);
    }
}
