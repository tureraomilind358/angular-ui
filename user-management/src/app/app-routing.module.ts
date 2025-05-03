import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './peges/login/login.component';
import { RegistrationComponent } from './peges/registration/registration.component';
import { UnlockAcComponent } from './peges/unlock-ac/unlock-ac.component';
import { ForgotPwdComponent } from './peges/forgot-pwd/forgot-pwd.component';

const routes: Routes = [
  {path:"", component:LoginComponent},
  {path:"registration", component:RegistrationComponent},
  {path:"unlockAcc", component:UnlockAcComponent},
  {path:"forgotPwd", component:ForgotPwdComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
