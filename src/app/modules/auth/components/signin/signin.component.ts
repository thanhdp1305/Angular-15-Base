import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Urls } from '../../../shared/configs/urls';
import { setAccessToken } from 'src/app/modules/shared/commons/cache-store';
import { uuidv4 } from 'src/app/modules/shared/commons/helpers';

declare let $: any;

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
})
export class SigninComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  signIn(): void {
    setAccessToken(uuidv4());
    this.router.navigate([Urls.dashboard]);
  }
}
