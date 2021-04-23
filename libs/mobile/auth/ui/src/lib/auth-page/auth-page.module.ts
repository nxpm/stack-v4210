import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { IonicModule } from '@ionic/angular'
import { MobileUiFormModule } from '@stack-v4210/mobile/ui/form'
import { MobileUiPageModule } from '@stack-v4210/mobile/ui/page'
import { AuthPageComponent } from './auth-page.component'

@NgModule({
  declarations: [AuthPageComponent],
  imports: [CommonModule, IonicModule, RouterModule, MobileUiFormModule, MobileUiPageModule],
  exports: [AuthPageComponent],
})
export class AuthPageModule {}
