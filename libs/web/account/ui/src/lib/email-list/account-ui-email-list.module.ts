import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { WebUiIconModule } from '@stack-v4210/web/ui/icon'
import { AccountUiEmailListComponent } from './account-ui-email-list.component'

@NgModule({
  exports: [AccountUiEmailListComponent],
  declarations: [AccountUiEmailListComponent],
  imports: [CommonModule, RouterModule, WebUiIconModule],
})
export class AccountUiEmailListModule {}
