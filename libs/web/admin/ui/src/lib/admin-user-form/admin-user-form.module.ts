import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { WebUiButtonModule } from '@stack-v4210/web/ui/button'
import { WebUiFormModule } from '@stack-v4210/web/ui/form'
import { AdminUserFormComponent } from './admin-user-form.component'

@NgModule({
  declarations: [AdminUserFormComponent],
  exports: [AdminUserFormComponent],
  imports: [CommonModule, RouterModule, WebUiFormModule, WebUiButtonModule],
})
export class AdminUserFormModule {}
