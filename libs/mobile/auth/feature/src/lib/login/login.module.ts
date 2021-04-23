import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { Routes, RouterModule } from '@angular/router'
import { MobileAuthDataAccessModule } from '@stack-v4210/mobile/auth/data-access'
import { MobileUiFormModule } from '@stack-v4210/mobile/ui/form'
import { AuthPageModule } from '@stack-v4210/mobile/auth/ui'
import { LoginComponent } from './login.component'

const routes: Routes = [{ path: '', component: LoginComponent }]

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MobileUiFormModule,
    AuthPageModule,
    MobileAuthDataAccessModule,
  ],
})
export class LoginModule {}
