import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { AdminUserFormModule } from '@stack-v4210/web/admin/ui'
import { WebUiPageHeaderModule } from '@stack-v4210/web/ui/page-header'

import { AdminUserPasswordComponent } from './admin-user-password.component'

@NgModule({
  declarations: [AdminUserPasswordComponent],
  imports: [
    AdminUserFormModule,
    CommonModule,
    RouterModule.forChild([{ path: '', component: AdminUserPasswordComponent }]),
    WebUiPageHeaderModule,
  ],
})
export class AdminUserPasswordModule {}
