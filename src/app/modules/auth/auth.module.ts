import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { SharedModule } from '../shared/shared.module';
import { AuthRoutes } from './auth.routes';
import { SigninComponent } from './components/signin/signin.component';
import { AuthService } from './services/auth.service';
import { NgSelectModule } from '@ng-select/ng-select';
import { Api } from '../shared/networks/api';

@NgModule({
  declarations: [SigninComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule,
    SharedModule,
    NgSelectModule,
    RouterModule.forChild(AuthRoutes),
  ],
  providers: [AuthService, Api],
  exports: [RouterModule],
})
export class AuthModule {}
