import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { Routes, RouterModule } from '@angular/router'
import { MobileAuthDataAccessModule } from '@stack-v4210/mobile/auth/data-access'
import { AuthPageModule } from '@stack-v4210/mobile/auth/ui'
import { RegisterComponent } from './register.component'

const routes: Routes = [{ path: '', component: RegisterComponent }]

@NgModule({
  declarations: [RegisterComponent],
  imports: [CommonModule, RouterModule.forChild(routes), AuthPageModule, MobileAuthDataAccessModule],
})
export class RegisterModule {}
