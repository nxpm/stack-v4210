import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { MobileUiButtonModule } from '@stack-v4210/mobile/ui/button'
import { MobileUiPageModule } from '@stack-v4210/mobile/ui/page'
import { MobileDashboardFeatureComponent } from './mobile-dashboard-feature.component'

@NgModule({
  declarations: [MobileDashboardFeatureComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        pathMatch: 'full',
        component: MobileDashboardFeatureComponent,
      },
    ]),
    MobileUiButtonModule,
    MobileUiPageModule,
  ],
})
export class MobileDashboardFeatureModule {}
