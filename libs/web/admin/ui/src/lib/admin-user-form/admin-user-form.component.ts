import { Component, EventEmitter, Input, Output } from '@angular/core'
import { FormGroup } from '@angular/forms'
import { User } from '@stack-v4210/web/core/data-access'

@Component({
  selector: 'user-form',
  template: `
    <div class="shadow overflow-hidden sm:rounded-lg">
      <div class="bg-gray-50 dark:bg-gray-800 px-6 py-4">
        <ui-form [form]="form" [model]="user" [fields]="fields" (submitForm)="submitForm.emit($event)">
          <div class="text-center">
            <ui-button [disabled]="!form?.valid" label="Save" type="submit"></ui-button>
          </div>
        </ui-form>
      </div>
    </div>
  `,
})
export class AdminUserFormComponent {
  @Input() form = new FormGroup({})
  @Input() user: User = {}
  @Output() submitForm = new EventEmitter()
  @Input() fields = []
}
